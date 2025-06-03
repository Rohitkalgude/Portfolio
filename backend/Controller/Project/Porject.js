const Project = require("../../Model/Project");

const createProject = async (req, res) => {
  try {
    const { title, description, link, live } = req.body;

    if (!title || !description || !link || !live) {
      return res.status(400).json({ message: "All required" });
    }

    const newpoject = new Project({ title, description, link, live });
    await newpoject.save();

    res.status(201).json({ message: "Project contect created ", Project: newpoject });
  } catch (error) {
    console.error("creating Project content", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = createProject;
