const express = require("express");
const router = express.Router();
const { listMatches } = require("../controllers/matchController");

router.get("/list", listMatches);

module.exports = router;
