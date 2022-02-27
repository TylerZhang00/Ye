import mongoose from "mongoose";
const { Schema } = mongoose;

const UserYardagesSchema = new Schema(
  {
    user: {
      type: String,
      trim: true,
      required: [true, "The customer email is required"],
    },
    stockYardages: {
      type: Array,
      trim: true,
    },
  },
  { collection: "stock_yardages", minimize: false, timestamps: true }
);

export default UserYardagesSchema;
