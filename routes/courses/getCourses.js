import { GolfCourses } from "../../models/models.js";

const getCourses = async (req, res) => {
  console.log("Getting courses:");

  const courses = await GolfCourses.find({});

  return res.json({
    success: true,
    message: "Successfully obatained courses",
    courses,
  });
};

export default getCourses;
