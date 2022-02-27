import mongoose from "mongoose";
const { model } = mongoose;

import UserYardagesSchema from "./schemas/userYardagesSchema.js";

export const UserYardages = model("yardages", UserYardagesSchema);
