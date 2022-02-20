const router = require("express").Router();

router.get("/", function (req, res) {
  console.log("Getting yardages:");
  const yardages = [
    {
      club: "Loft Wedge",
      name: "Callaway Jaws Wedge 60",
      yardages: [null, null],
    },
    { club: "Sand Wedge", name: null, yardages: [null, null] },
    {
      club: "Assist Wedge",
      name: "Callaway Apex 21 AW",
      yardages: [80, 80, 100],
    },
    {
      club: "Pitching Wedge",
      name: "Callaway Apex 21 PW",
      yardages: [125, 125, 135],
    },
    {
      club: "Nine Iron",
      name: "Callaway Apex 21 9I",
      yardages: [135, 135, 145],
    },
    {
      club: "Eight Iron",
      name: "Callaway Apex 21 8I",
      yardages: [145, 145, 155],
    },
    {
      club: "Seven Iron",
      name: "Callaway Apex 21 7I",
      yardages: [155, 155, 165],
    },
    {
      club: "Six Iron",
      name: "Callaway Apex 21 6I",
      yardages: [165, 165, 175],
    },
    {
      club: "Five Iron",
      name: "Callaway Apex 21 5I",
      yardages: [175, 175, 185],
    },
    { club: "Four Iron", name: null, yardages: [null, null] },
    {
      club: "Three Hybrid",
      name: "Callaway Pro 21 Hybrid",
      yardages: [null, null],
    },
    { club: "Three Wood", name: "Big Bertha 3 Wood", yardages: [null, null] },
    { club: "Driver", name: "Big Bertha B21 Driver", yardages: [null, null] },
  ];
  console.log("Obtained yardages:", yardages);
  return res.json({
    success: true,
    message: "Successfully obatained yardages.",
    yardages,
  });
});

module.exports = router;
