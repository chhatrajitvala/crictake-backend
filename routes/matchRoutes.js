// matchRoutes.js
const express = require("express");
const router = express.Router();
const { getMatches } = require("../controllers/matchController"); // ✅ Correct name

router.get("/list", getMatches);

module.exports = router;
