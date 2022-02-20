const router = require("express").Router();

router.get("/", function (req, res) {
  console.log("Getting yardages:");
  const yardages = {
    sixtyDegree: [null, null],
    assistWedge: [80, 100],
    pitchingWedge: [125 - 135],
    nineIron: [135 - 145],
    eightIron: [145 - 155],
    sevenIron: [155 - 165],
    sixIron: [165 - 175],
    fiveIron: [175 - 185],
    fourIron: [null, null],
    fourHybrid: [null, null],
    threeHybrid: [null, null],
    fiveWood: [null, null],
    threeWood: [null, null],
    driver: [null, null],
  };
  console.log("Obtained yardages:", yardages);
  return res.json({
    success: true,
    message: "Successfully obatained yardages.",
    yardages,
  });
});

module.exports = router;
