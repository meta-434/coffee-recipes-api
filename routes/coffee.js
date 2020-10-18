const express = require('express');
const router = express.Router({mergeParams: true});
const coffeeService = require('../services/coffeeService');
const firebase = require('../firebase');

/* Test GET function */
router.get('/', (req, res, next) => {
    // console.log(req.query);
    let ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });
    res.send(`i got the following request info: ${req.query.hi}`);
})

module.exports = router;