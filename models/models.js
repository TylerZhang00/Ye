import mongoose from "mongoose";
const { model } = mongoose;

import GolfCoursesSchema from "./schemas/golfCoursesSchema.js";
import UserYardagesSchema from "./schemas/userYardagesSchema.js";
import UserScoresSchema from "./schemas/userScoresSchema.js";

export const GolfCourses = model("golfcourses", GolfCoursesSchema);
export const UserScores = model("scores", UserScoresSchema);
export const UserYardages = model("yardages", UserYardagesSchema);
