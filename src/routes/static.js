const express = require("express");
const router = express.Router();

router.get("/", (req, res, body) => {
  res.send("Welcome to Bloccit");
});

module.exports router;
