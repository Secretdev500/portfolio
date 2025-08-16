const admin = require("firebase-admin");

// 🔐 Load from environment variable set in Render
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://contact-form-portfolio-bc709-default-rtdb.firebaseio.com",
});

const database = admin.database();
module.exports = database;
