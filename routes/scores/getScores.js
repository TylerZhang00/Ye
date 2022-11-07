import { UserScores } from "../../models/models.js";

const getScores = async (req, res) => {
  const user = req.query.user;

  const scores = await UserScores.find({ user });

  return res.json({
    success: true,
    message: "Successfully obatained scores",
    scores,
  });
};

export default getScores;
