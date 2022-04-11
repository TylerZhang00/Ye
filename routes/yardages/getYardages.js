import { UserYardages } from "../../models/models.js";

const getYardages = async (req, res) => {
  console.log("Getting yardages:");
  const user = req.params.user;
  console.log("Found user:", user);
  const userYardages = await UserYardages.findOne({
    user,
  });

  return res.json({
    success: true,
    message: "Successfully obatained yardages.",
    userYardages,
  });
};

export default getYardages;
