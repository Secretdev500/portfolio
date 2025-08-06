const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./firebase'); // ✅ Firebase connection

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.post('/contact_form', (req, res) => {
  const formData = req.body;

  db.ref('contacts').push({
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    timestamp: new Date().toISOString()
  })
  .then(() => {
    console.log('Contact entry saved to Firebase');
    res.redirect('/thankyou.html');
  })
  .catch((err) => {
    console.error('Error saving to Firebase:', err);
    res.status(500).send('Error saving contact entry.');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
