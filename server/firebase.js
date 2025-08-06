// server/firebase.js
const firebase = require("firebase/app");
require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyAkVMLKl23vU3mTpftcQ2qxwkTpmuyUjnU",
  authDomain: "contact-form-portfolio-bc709.firebaseapp.com",
  databaseURL: "https://contact-form-portfolio-bc709-default-rtdb.firebaseio.com",
  projectId: "contact-form-portfolio-bc709",
  storageBucket: "contact-form-portfolio-bc709.firebasestorage.app",
  messagingSenderId: "1092396584493",
  appId: "1:1092396584493:web:50ae69e43573edc42332a4",
  measurementId: "G-FX8KVFZJD3"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

module.exports = database;
