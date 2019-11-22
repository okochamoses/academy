const router = require("express").Router();

// Entry endpoint for url
router.get("/", (req, res) => {
  return res.send("Welcome to the academy");
});

module.exports = router;
