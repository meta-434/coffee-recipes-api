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

router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  const result = usersService.createUser(username, password);
  res.status(200).json({
      status: `new key @ ${result}`,
      message: `success`
      });
})

module.exports = router;
