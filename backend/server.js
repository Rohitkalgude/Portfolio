const express = require("express");
const connectDB = require("./config/db");
const Home = require("./routes/home");
const About = require("./routes/About");
const Project = require("./routes/Project");
const Contect = require("./routes/Contect");

require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api", Home);
app.use("/api", About);
app.use("/api", Project);
app.use("/api", Contect);

const PORT = 5000;
app.listen(PORT, () => console.log(`server runing or port ${PORT}`));
