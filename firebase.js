require('dotenv').config();
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
const admin = require("firebase-admin");
const serviceAccount = require('./coffee-app-ebcd9-f4a00ec150dd.json');

// admin firebase initialization
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://coffee-app-ebcd9.firebaseio.com"
});

//firebase initialization
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
}
firebase.initializeApp(firebaseConfig);


module.exports = admin;