const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brucenshuti2@gmail.com',
    pass: 'qamn pbcl guol rtdz' // App password
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Email submission endpoint
app.post('/submit-email', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Configure email options
    const mailOptions = {
      from: 'brucenshuti2@gmail.com',
      to: 'brucenshuti2@gmail.com', // Send to yourself
      subject: 'New Email Submission',
      html: `
        <h3>New Contact Details</h3>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Email submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to submit email' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})