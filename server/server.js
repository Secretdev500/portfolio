// server/server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


// Nodemailer setup
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yasircd2006@gmail.com', // your email
    pass: 'ubtv qhbt ahgk swxn' // use Gmail App Password, not your main password
  }
});

// Middleware to serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse form data

// Route for index.html
app.get(['/index', '/'], (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Route to handle form submission
app.post('/contact_form', (req, res) => {
  const formData = req.body;

  // Email options
  const mailOptions = {
    from: formData.email,
    to: 'yasircd2006@gmail.com',
    subject: `Portfolio Contact Form: ${formData.subject || 'No Subject'}`,
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Error sending email:', error);
      return res.status(500).send('Error sending email.');
    }
    console.log('✅ Email sent:', info.response);
    res.redirect('/thankyou.html');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
