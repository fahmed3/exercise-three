const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // We want to send the response to the requestor
  res.send("Homepage: Exercise Three");
});

module.exports = router;
