import mongoose from "mongoose";
const { Schema } = mongoose;

const GolfProductsSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    href: {
      type: Number,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
    },
    btcPrice: {
      type: Number,
      trim: true,
    },
    imageSrc: {
      type: String,
      trim: true,
    },
    imageAlt: {
      type: String,
      trim: true,
    },
  },
  { collection: "golf_products", minimize: false, timestamps: true }
);

export default GolfProductsSchema;
