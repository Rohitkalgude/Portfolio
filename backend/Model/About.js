const mongoose = require("mongoose");

const About = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("About", About);
