import mongoose from "mongoose";
const { Schema } = mongoose;

const GolfCoursesSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    videoId: {
      type: String,
      trim: true,
      required: true,
    },
    href: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { collection: "golf_tutorial_videos", minimize: false, timestamps: true }
);

export default GolfCoursesSchema;
