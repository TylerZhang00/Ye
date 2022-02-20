const router = require("express").Router();

router.get("/", function (req, res) {
  console.log("Getting yardages:");
  const yardages = [
    { loftWedge: { club: "Callaway Jaws Wedge 60" }, yardages: [null, null] },
    { sandWedge: null },
    { assistWedge: { club: "Callaway Apex 21 AW", yardages: [80, 100] } },
    { pitchingWedge: { club: "Callaway Apex 21 PW", yardages: [125, 135] } },
    { nineIron: { club: "Callaway Apex 21 9I", yardages: [135, 145] } },
    { eightIron: { club: "Callaway Apex 21 8I", yardages: [145, 155] } },
    { sevenIron: { club: "Callaway Apex 21 7I", yardages: [155, 165] } },
    { sixIron: { club: "Callaway Apex 21 6I", yardages: [165, 175] } },
    { fiveIron: { club: "Callaway Apex 21 5I", yardages: [175, 185] } },
    { fourIron: null },
    { threeHybrid: { club: "Callaway Pro 21 Hybrid", yardages: [null, null] } },
    { threeWood: { club: "Big Bertha 3 Wood", yardages: [null, null] } },
    { driver: { club: "Big Bertha B21 Driver", yardages: [null, null] } },
  ];
  console.log("Obtained yardages:", yardages);
  return res.json({
    success: true,
    message: "Successfully obatained yardages.",
    yardages,
  });
});

module.exports = router;
