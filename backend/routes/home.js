const express = require("express");
const createHome = require("../Controller/Home");

const router = express.Router();

router.post("/Home/create", createHome);

module.exports = router;