import { UserScores } from "../../models/models.js";

const deleteScores = async (req, res) => {

  let payloadToDelete = {
    user: req.body.user,
    course: req.body.scores.course,
    date: req.body.scores.date,
    par: req.body.scores.par,
    player: req.body.scores.player,
    score: req.body.scores.score,
    slope: req.body.scores.slope,
    tees: req.body.scores.tees,
    yardage: req.body.scores.yardage,
  };

  await UserScores.deleteOne(payloadToDelete);

  return res.json({
    success: true,
    message: "Successfully deleted scores",
  });
};

export default deleteScores;
