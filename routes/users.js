const express = require('express');
const usersService = require("../services/usersService");
const router = express.Router();


// GET UUID IF USER EXISTS
router.get("/login", async (req, res, next) => {
  const { username, password } = req.query;
  const result = await usersService.signIn(username, password).catch(e => {
    if (!!e) return res
        .status(400)
        .json(e)
  })
  }
);

// CREATE UUID IF USER DOES NOT EXIST
router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  await usersService.createUser(username, password)
      .then(result => {
        res
            .status(200)
            .json({
              data: {
                status: `success`,
                UUID: result
              }
            })
            .end();
      })
      .catch(e => {
    if (e) {
      res
          .status(400)
          .json({
            data: {
              status: 'error',
              description: ''+e
            }
          })
          .end();
    }
  });

})

module.exports = router;
