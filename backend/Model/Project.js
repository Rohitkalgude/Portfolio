const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  live: {
    type: String,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
