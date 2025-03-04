require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Email = require('./email');
const EmailService = require('./email-service');
const path = require('path');
const myEmail = "brucenshuti2@gmail.com";

// Create transporter for email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Initialize email service
const emailService = new EmailService(transporter);

const app = express();

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));

// ... transporter and emailService setup

app.post('/send-email', async (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    console.log(req.body);
    
// names
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).send(`Please fill in all fields.${firstName},${lastName},${email},${message}`);
    }
    
        // Enhanced email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send("Please enter a valid email address.");
        }

    const newEmail = new Email(
        myEmail,
        myEmail,
        `Message from ${firstName} ${lastName}`,
        `<p><b>First Name:</b> ${firstName}</p>
        <P><B>Last name:</b>${lastName}</p>
         <p><b>Email:</b> ${email}</p>
         <p><b>Message:</b> ${message}</p>`
    );
    
    
    try {
        const result = await emailService.send(newEmail);
        if (result.success) {
            res.redirect('/thankyou.html'); // Updated redirect path
        } else {
            res.status(500).send('Error sending email. Please try again later.');
        }
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).send('An unexpected error occurred. Please try again later.');
    }
  
});

app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/thankyou.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'thankyou.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
