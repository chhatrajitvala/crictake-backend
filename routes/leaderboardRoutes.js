const express = require("express");
const router = express.Router();
const { getLeaderboard } = require("../controllers/leaderboardController");

router.get("/:matchId", getLeaderboard);

module.exports = router;
