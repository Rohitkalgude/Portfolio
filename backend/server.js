const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
connectDB();

const PORT = 5000;

app.listen(PORT, () => console.log(`server runing or port ${PORT}`));