const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5200;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/auth", authRoutes);

app.listen(PORT, ()=> console.log(`Listening at http://localhost:${PORT}`));