const mongoose = require("mongoose");

const Home = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.model("Home", Home);
