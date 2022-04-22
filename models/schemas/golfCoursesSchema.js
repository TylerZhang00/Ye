import mongoose from "mongoose";
const { Schema } = mongoose;

const GolfCoursesSchema = new Schema(
  {
    property: {
      type: String,
      trim: true,
      required: true,
    },
    latitude: {
      type: Number,
      trim: true,
      required: true,
    },
    longitude: {
      type: Number,
      trim: true,
      required: true,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    country: {
      type: String,
      trim: true,
      required: true,
    },
    holes: {
      type: Number,
      trim: true,
      required: true,
    },
    public: {
      type: Boolean,
      trim: true,
      required: true,
    },
    range: {
      type: Boolean,
      trim: true,
      required: true,
    },
    rating: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  { collection: "golf_courses", minimize: false, timestamps: true }
);

export default GolfCoursesSchema;
