const express = require("express");

const router = express.Router();

// @route    GET api/auth
// @desc     Get a logged in user
// @access   private

router.get("/", (req, res) => {
  res.send("Get a logged in user");
});

// @route    POST api/auth
// @desc     Authenticate a User & get a token
// @access   public

router.post("/", (req, res) => {
  res.send("Log in a User");
});

module.exports = router;
