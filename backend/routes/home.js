const express = require("express");
const createHome = require("../Controller/Home/Home");
const Updatehome = require("../Controller/Home/Update");

const router = express.Router();

router.post("/createhome", createHome);
router.put("/updatehome", Updatehome);

module.exports = router;