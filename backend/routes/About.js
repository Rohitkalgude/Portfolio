const express = require("express");
const createAbout = require("../Controller/About/About");
const createupdate = require("../Controller/About/Update")

const router = express.Router();

router.post("/createabout", createAbout);
router.put("/createupdate", createupdate);

module.exports = router;
