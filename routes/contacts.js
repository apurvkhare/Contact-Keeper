const express = require("express");

const router = express.Router();

// @route    GET api/contacts
// @desc     Get contacts of a User
// @access   private

router.get("/", (req, res) => {
  res.send("Get contacts of a User");
});

// @route    POST api/contacts
// @desc     Add a new contact for a User
// @access   private

router.post("/", (req, res) => {
  res.send("Add a new contact");
});

// @route    PUT api/contacts/:id
// @desc     Update a contact for a User
// @access   private

router.put("/:id", (req, res) => {
  res.send("Update a new contact");
});

// @route    DELETE api/contacts/:id
// @desc     Delete a contact for a User
// @access   private

router.delete("/:id", (req, res) => {
  res.send("Delete a new contact");
});

module.exports = router;
