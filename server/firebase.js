// server/firebase.js
const admin = require("firebase-admin");
const path = require("path");

// Load service account key (downloaded from Firebase Console)
const serviceAccount = require(path.join(__dirname, "../serviceAccountKey.json")); // Adjust path if needed

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://contact-form-portfolio-bc709-default-rtdb.firebaseio.com", // Your Realtime DB URL
});

// Export database reference
const database = admin.database();

module.exports = database;
