const Home = require("../Model/Home");

const home = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ message: "Descriptiopn are required" });
    }

    const newHome = new Home({ description });
    await newHome.save();

    res.status(201).json({ message: "Home contect created ", home: newHome });
  } catch (error) {
    console.error("creating homw content", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = home;
