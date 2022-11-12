import mongoose from "mongoose";
const { model } = mongoose;

import GolfCoursesSchema from "./schemas/golfCoursesSchema.js";
import GolfProductsSchema from "./schemas/golfProductsSchema.js";
import GolfTutorialVideosSchema from "./schemas/golfTutorialVideosSchema.js";
import UserYardagesSchema from "./schemas/userYardagesSchema.js";
import UserScoresSchema from "./schemas/userScoresSchema.js";

export const GolfCourses = model("golfcourses", GolfCoursesSchema);
export const GolfProducts = model("golfproducts", GolfProductsSchema);
export const GolfTutorialVideos = model(
  "golftutorialvideos",
  GolfTutorialVideosSchema
);
export const UserScores = model("scores", UserScoresSchema);
export const UserYardages = model("yardages", UserYardagesSchema);
