const About = require("../Model/About");

const createAbout = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ message: "Description is required" });
    }

    const newAbout = new About({ description });
    await newAbout.save();

    res.status(201).json({ message: "desciption create", About: newAbout });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = createAbout;
