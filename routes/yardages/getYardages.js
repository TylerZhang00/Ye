import { UserYardages } from "../../models/models.js";

const getYardages = async (req, res) => {
  console.log("Getting yardages:");
  const yardages = [
    {
      club: "Loft Wedge",
      name: "Callaway Jaws Wedge 60",
      yardages: [70, 60, 80],
    },
    { club: "Sand Wedge", name: null, yardages: [null, null] },
    {
      club: "Assist Wedge",
      name: "Callaway Apex 21 AW",
      yardages: [90, 80, 100],
    },
    {
      club: "Pitching Wedge",
      name: "Callaway Apex 21 PW",
      yardages: [115, 105, 125],
    },
    {
      club: "Nine Iron",
      name: "Callaway Apex 21 9I",
      yardages: [125, 125, 135],
    },
    {
      club: "Eight Iron",
      name: "Callaway Apex 21 8I",
      yardages: [135, 135, 145],
    },
    {
      club: "Seven Iron",
      name: "Callaway Apex 21 7I",
      yardages: [145, 145, 155],
    },
    {
      club: "Six Iron",
      name: "Callaway Apex 21 6I",
      yardages: [155, 155, 165],
    },
    {
      club: "Five Iron",
      name: "Callaway Apex 21 5I",
      yardages: [165, 165, 175],
    },
    { club: "Four Iron", name: null, yardages: [null, null] },
    {
      club: "Four Hybrid",
      name: "Callaway Pro 21 Hybrid",
      yardages: [175, 175, 185],
    },
    {
      club: "Three Hybrid",
      name: "Callaway Pro 21 Hybrid",
      yardages: [185, 185, 200],
    },
    {
      club: "Three Wood",
      name: "Big Bertha 3 Wood",
      yardages: [200, 200, 220],
    },
    {
      club: "Driver",
      name: "Big Bertha B21 Driver",
      yardages: [220, 220, 250],
    },
  ];

  const userYardages = await UserYardages.findOne({
    user: "yiqizhang@gmail.com",
  });

  console.log("DB Yardages:", userYardages);

  // console.log("Obtained yardages:", yardages);
  return res.json({
    success: true,
    message: "Successfully obatained yardages.",
    userYardages,
  });
};

export default getYardages;
