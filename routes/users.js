const express = require('express');
const usersService = require("../services/usersService");
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.query;
  usersService.signIn(email, password);
  }
);

router.post("/signup", (req, res, next) => {
  const { email, password } = req.query;
  usersService.createUser(email, password);
})

module.exports = router;
