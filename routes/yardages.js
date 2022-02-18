var router = require("express").Router();

router.get("/", function (req, res) {
  res.send("Here are your stock yardages: 300 yards");
});

module.exports = router;
