 require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
// 
const app = express(); // Initialize the Express app
// 
// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 
// Nodemailer Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
// 
// Route to handle email sending
app.get('/send-email', (req, res) => { // Use POST instead of GET for form data submission
    const { firstName, lastName, email, message } = req.body;
// 
    // Input validation
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
// 
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }
// 
    // Define the email options
    const mailOptions = {
        from: 'brucenshuti2@gmail.com',
        to: process.env.EMAIL_USER,
        subject: 'New Message from Contact Form',
        text: "",
        html: ''
    };
// 
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error.message);
            return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
        }
        console.log('Email sent successfully:', info.response);
        res.status(200).json({ message: 'Message sent successfully!' });
    });
});
// 
// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err.stack);
    res.status(500).json({ error: 'Something went wrong on the server.' });
});
// 
// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// 
// 
// 