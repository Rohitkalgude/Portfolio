const mongoose = require("mongoose");


const Home = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model("Home", Home);