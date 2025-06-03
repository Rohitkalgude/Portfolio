const mongoose = require("mongoose");

const ContectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Message: {
    type: String,
  },
});

module.exports = mongoose.model("Contect", ContectSchema);
