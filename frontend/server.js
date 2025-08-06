
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this to parse form data

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.post('/contact_form' , (req , res) => {
    let formData = req.body;
    // Prepare log entry
    const logEntry = `--- Contact Form Entry ---\nDate: ${new Date().toLocaleString()}\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}\n-------------------------\n\n`;
    // Append to contact_log.txt
    fs.appendFile('contact_log.txt', logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        } else {
            console.log('Contact entry logged.');
        }
    });
    console.log(formData);
    res.redirect('/thankyou.html');
});




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
