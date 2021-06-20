const express = require('express');
const router = express.Router({mergeParams: true});
const coffeeService = require('../services/coffeeService');


/* Test GET function */
router.get('/', (req, res, next) => {
    let ref = admin.database().ref();
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });
    res.send(`i got the following request info: ${req.query.hi}`);
})

module.exports = router;
