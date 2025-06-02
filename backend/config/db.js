const mongoose = require("mongoose");
require("dotenv").config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONO_URL);
        console.log("mongoDB connect")
    } catch (error) {
        console.log(error.message)
        process.exit(1);
    }
}

module.exports = connectDB;