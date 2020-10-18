const express = require('express');
const usersService = require("../services/usersService");
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post("/login", (req, res, next) => {
  const { displayName, photo, email, password } = req.query;
  usersService.signIn(displayName, photo, email, password);
  }
);

router.post("/signup", (req, res, next) => {
  const { email, password } = req.query;
  const result = usersService.createUser(email, password);
  console.log('result', result);
  res.status(200).send(`success: uid=${result}`);
})

module.exports = router;
