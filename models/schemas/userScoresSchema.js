import mongoose from "mongoose";
const { Schema } = mongoose;

const UserScoresSchema = new Schema(
  {
    course: {
      type: String,
      trim: true,
    },
    date: {
      type: String,
      trim: true,
    },
    par: {
      type: Number,
      trim: true,
    },
    player: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      trim: true,
    },
    score: {
      type: Number,
      trim: true,
    },
    slope: {
      type: Number,
      trim: true,
    },
    user: {
      type: String,
      trim: true,
    },
    tees: {
      type: String,
      trim: true,
    },
    yardage: {
      type: Number,
      trim: true,
    },
  },
  { collection: "golf_scores", minimize: false, timestamps: true }
);

export default UserScoresSchema;
