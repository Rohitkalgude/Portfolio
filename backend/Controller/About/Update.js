const About = require("../../Model/About");

const update = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingAbout = await About.findOne();
    if (!existingAbout) {
      return res.status(400).json({ message: "About content note found" });
    }

    existingAbout.description = description;
    await existingAbout.save();

    res
      .status(200)
      .json({ message: "About content updated", home: existingAbout });
  } catch (error) {
    console.error("Error updating About content:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = update;
