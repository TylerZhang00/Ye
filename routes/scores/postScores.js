import { UserScores } from "../../models/models.js";

const postScores = async (req, res) => {
  const user = req.body.user;
  const scoreAdded = req.body.scores;
  let payload = {
    user: user,
    course: scoreAdded.course,
    date: scoreAdded.date,
    par: scoreAdded.par,
    player: scoreAdded.player,
    score: scoreAdded.score,
    slope: scoreAdded.slope,
    tees: scoreAdded.tees,
    yardage: scoreAdded.yardage,
  };

  try {
    await UserScores(payload).save();

    return res.json({
      success: true,
      message: "Successfully added yardage",
    });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default postScores;
