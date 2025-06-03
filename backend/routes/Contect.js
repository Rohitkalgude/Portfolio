const express = require("express");
const createContect = require("../Controller/Contect/Contect");

const router = express.Router();

router.post("/createcontect",createContect)

module.exports = router;
