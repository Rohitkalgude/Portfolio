const express = require("express");
const createProject  = require("../Controller/Project/Porject");
const updateProject = require("../Controller/Project/Update");
const deleteProject = require("../Controller/Project/delete"); 

const router = express.Router();

router.post("/createproject", createProject);
router.put("/updateproject/:id", updateProject);
router.delete("/deleteproject/:id", deleteProject);

module.exports = router;