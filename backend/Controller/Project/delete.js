const Project = require("../../Model/Project");

const deletePorject = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProject = await Project.findByIdAndDelete(id);
    if (!deleteProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res
      .status(200)
      .json({ message: "Project delete succefully", project: deletePorject });
  } catch (error) {
    console.error("Error deleting project", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deletePorject;
