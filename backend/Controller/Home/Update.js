const Home = require("../../Model/Home");

const updateHome = async (req, res) => {
  try {
    const { description, name, role } = req.body;

    if (!description || !name || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingHome = await Home.findOne();
    if (!existingHome) {
      return res.status(404).json({ message: "Home content not found" });
    }

    existingHome.description = description;
    existingHome.name = name;
    existingHome.role = role;

    await existingHome.save();

    res
      .status(200)
      .json({ message: "Home content updated", home: existingHome });
  } catch (error) {
    console.error("Error updating home content:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateHome;
