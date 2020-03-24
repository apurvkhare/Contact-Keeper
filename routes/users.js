const express = require("express");

const router = express.Router();

// @route    POST api/users
// @desc     Register a User
// @access   public

router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
