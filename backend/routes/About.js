const express = require("express");
const createAbout = require("../Controller/About");

const router = express.Router();

router.post("/About/create", createAbout);

module.exports = router;
