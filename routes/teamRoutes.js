const express = require("express");
const router = express.Router();
const { createTeam, getTeamsByUser } = require("../controllers/teamController");
const { authenticateToken } = require("../middleware/authMiddleware");

router.post("/create", authenticateToken, createTeam);
router.get("/user", authenticateToken, getTeamsByUser);

module.exports = router;
