const port = 5000;
const bodyParser = require('body-parser')
const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://brucenshuti2:HelloWorld@cluster0.1kdud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))


app.post('/submit', async (req, res) =>{
    try {
        await client.connect();
        await client.save();
        const database = client.db("Subscribers");
        const collection = database.collection("users");

        const { name, email } = req.body;

        const insertResult = await collection.insertOne({ name, email });
        console.log("Inserted document:", insertResult.insertedId);

        // Redirect to thankyou.html
        res.redirect('/thankyou.html');
    } catch (error) {
        console.error("Error submitting form:", error);
        res.status(500).send('An error occurred.');
    } finally {
        await client.close();
    }
});




async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () =>{
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    console.log(`this server is running on http://localhost:${port}`);
    
})