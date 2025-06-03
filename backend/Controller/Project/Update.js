const Project = require("../../Model/Project");

const updateproject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, link, live } = req.body;

    if (!title || !description || !link || !live) {
      return res.status(400).json({ message: "All are required" });
    }

    const project = await Project.findById(id);
    if (!project) {
      return res.status(401).json({ message: "Project data not found" });
    }

    project.title = title;
    project.description = description;
    project.link = link;
    project.live = live;

    await project.save();

    res.status(201).json({ message: "Project data update", Porject: project });
  } catch (error) {
    console.error("Error updating home content:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateproject;
