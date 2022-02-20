const router = require("express").Router();

router.get("/", function (req, res) {
  console.log("Getting yardages:");
  const yardages = [
    {
      club: "loftWedge",
      name: "Callaway Jaws Wedge 60",
      yardages: [null, null],
    },
    { club: "sandWedge", name: null, yardages: [null, null] },
    { club: "assistWedge", name: "Callaway Apex 21 AW", yardages: [80, 100] },
    {
      club: "pitchingWedge",
      name: "Callaway Apex 21 PW",
      yardages: [125, 135],
    },
    { club: "nineIron", name: "Callaway Apex 21 9I", yardages: [135, 145] },
    { club: "eightIron", name: "Callaway Apex 21 8I", yardages: [145, 155] },
    { club: "sevenIron", name: "Callaway Apex 21 7I", yardages: [155, 165] },
    { club: "sixIron", name: "Callaway Apex 21 6I", yardages: [165, 175] },
    { club: "fiveIron", name: "Callaway Apex 21 5I", yardages: [175, 185] },
    { club: "fourIron", name: null, yardages: [null, null] },
    {
      club: "threeHybrid",
      name: "Callaway Pro 21 Hybrid",
      yardages: [null, null],
    },
    { club: "threeWood", name: "Big Bertha 3 Wood", yardages: [null, null] },
    { club: "driver", name: "Big Bertha B21 Driver", yardages: [null, null] },
  ];
  console.log("Obtained yardages:", yardages);
  return res.json({
    success: true,
    message: "Successfully obatained yardages.",
    yardages,
  });
});

module.exports = router;
