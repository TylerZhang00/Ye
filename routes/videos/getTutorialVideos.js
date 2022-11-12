import { GolfTutorialVideos } from "../../models/models.js";

const getTutorialVideos = async (req, res) => {
  console.log("Getting tutorial videos:");

  const videos = await GolfTutorialVideos.find({});

  return res.json({
    success: true,
    message: "Successfully obatained videos",
    videos,
  });
};

export default getTutorialVideos;
