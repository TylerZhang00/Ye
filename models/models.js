import mongoose from "mongoose";
const { model } = mongoose;

import GolfCoursesSchema from "./schemas/golfCoursesSchema.js";
import UserYardagesSchema from "./schemas/userYardagesSchema.js";

export const GolfCourses = model("golfcourses", GolfCoursesSchema);
export const UserYardages = model("yardages", UserYardagesSchema);
