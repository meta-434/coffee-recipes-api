const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");
require("firebase/database");

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
    projectId: `${process.env.PROJECT_ID}`,
    storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
    messagingSenderId: `${process.env.SENDER_ID}`,
    appId: `${process.env.APP_ID}`,
    measurementId: `G-${process.env.MEASUREMENT_ID}`,
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;