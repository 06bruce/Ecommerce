require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Email = require('./email');
const EmailService = require('./email-service');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ... transporter and emailService setup

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
// names
    if (!name || !email || !message) {
        return res.status(400).send('Please fill in all fields.');
    }
    
        if (!new Email().isValidEmail(email)) {
        return res.status(400).send("Invalid email format.")
    }

    const newEmail = new Email(
        myEmail,
        myEmail,
        `Message from ${name}`,
        `<p><b>First Name:</b> ${firstName}</p>
        <P><B>Last name:</b>${lastName}</p>
         <p><b>Email:</b> ${email}</p>
         <p><b>Message:</b> ${message}</p>`
    );

    const result = await emailService.send(newEmail);

    if (result.success) {
        res.redirect('/public/thankyou.html'); // Redirect on success
    } else {
        res.status(500).send('Error sending email. Please try again later.');
    }
});

app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/thankyou', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'thankyou.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));