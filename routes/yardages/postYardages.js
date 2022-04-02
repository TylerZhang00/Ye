import { UserYardages } from "../../models/models.js";

const postYardages = async (req, res) => {
  const user = req.body.user;
  let clubAdded = req.body.clubAdded;

  try {
    const existingUser = await UserYardages.findOne({ user: user });
    const existingStockYardages = existingUser.stockYardages;

    if (!existingUser) {
      await UserYardages.create({
        user: user,
        stockYardages: [clubAdded],
      });
      return res.json({
        success: true,
        message: "Successfully added user and yardage",
      });
    } else {
      // Checks if club from request exists in user's yardages
      const foundClubInBag = existingStockYardages.findIndex(
        (club) => club.club === clubAdded.club
      );

      if (foundClubInBag >= 0) {
        await UserYardages.updateOne(
          { _id: existingUser._id, "stockYardages.club": clubAdded.club },
          {
            $set: { "stockYardages.$.yardages": clubAdded.yardages },
          }
        );
        return res.json({
          success: true,
          message: "Successfully updated yardage",
        });
      } else {
        await UserYardages.findOneAndUpdate(
          { _id: existingUser._id },
          { $addToSet: { stockYardages: clubAdded } }
        );
        return res.json({
          success: true,
          message: "Successfully added yardage",
        });
      }
    }
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default postYardages;
