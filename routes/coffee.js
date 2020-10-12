var express = require('express');
var router = express.Router();

/* Test POST function */
router.get('/coffee', (req, res, next) => {
    res.send(`i got the following request info: ${req}`);
})

module.exports = router;