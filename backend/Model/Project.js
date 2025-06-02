const mongoose = require("../Model/Project");

const Project = new mongoose.schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  githubUrl: {
    type: String,
  },
  live: {
    type: String,
  },
});

module.exports = mongoose.module("project", Project);
