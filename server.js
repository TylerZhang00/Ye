import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3100;

import connectDB from "./config/db.js";
import getCourses from "./routes/courses/getCourses.js";

// Scores
import getScores from "./routes/scores/getScores.js";
import postScores from "./routes/scores/postScores.js";
import deleteScores from "./routes/scores/deleteScores.js";

// Products
import getProducts from "./routes/products/getProducts.js";

// Yardages
import getYardages from "./routes/yardages/getYardages.js";
import postYardages from "./routes/yardages/postYardages.js";
import deleteYardages from "./routes/yardages/deleteYardages.js";

connectDB(); // Connect Database

app.use(cors());

// Init middleware
app.set("trust proxy", true);
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => res.send("Hello Golfers!"));
app.get("/courses", getCourses);
app.get("/yardages/:user", getYardages);

// Products
app.get("/products/getProducts", getProducts);

// Scores
app.get("/scores/getScores", getScores);
app.post("/scores/postScores", postScores);
app.delete("/scores/deleteScores", deleteScores);

// Yardages
app.post("/yardages/postYardages", postYardages);
app.delete("/yardages/deleteYardages", deleteYardages);

// Start the server on port 3000
app.listen(process.env.PORT || 3100, () =>
  console.log(`Hello Golfers, welcome to port: ${port}`)
);
