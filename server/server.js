// server/server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Firebase database connection
const db = require('./firebase'); // Make sure firebase.js is in the same folder

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

  // Save form data to Firebase Realtime Database
  db.ref('contacts').push({
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    timestamp: new Date().toISOString()
  })
  .then(() => {
    console.log('✅ Contact entry saved to Firebase');
    res.redirect('/thankyou.html');
  })
  .catch((err) => {
    console.error('❌ Error saving to Firebase:', err);
    res.status(500).send('Error saving contact entry.');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
