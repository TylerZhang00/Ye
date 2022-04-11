import { UserYardages } from "../../models/models.js";

const getYardages = async (req, res) => {
  console.log("Deleting yardages:");
  const user = req.body.user;
  const club = req.body.club;

  const existingUser = await UserYardages.findOne({ user: user });

  await UserYardages.updateOne(
    { _id: existingUser._id },
    { $pull: { stockYardages: { club: club } } }
  );

  return res.json({
    success: true,
    message: "Successfully deleted yardages.",
  });
};

export default getYardages;
