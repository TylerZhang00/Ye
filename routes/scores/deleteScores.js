import { UserScores } from "../../models/models.js";

const deleteScores = async (req, res) => {
  const scoreToDelete = req.body.scores;
  console.log("Score:", scoreToDelete);

  let payload = {
    user: req.body.user,
    course: scoreToDelete.course,
    date: scoreToDelete.date,
    par: scoreToDelete.par,
    player: scoreToDelete.player,
    score: scoreToDelete.score,
    slope: scoreToDelete.slope,
    tees: scoreToDelete.tees,
    yardage: scoreToDelete.yardage,
  };

  console.log("payload:", payload);

  const x = await UserScores.deleteOne(payload);

  console.log("x:", x);

  return res.json({
    success: true,
    message: "Successfully deleted scores",
  });
};

export default deleteScores;
