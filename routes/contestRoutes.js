const express = require("express");
const router = express.Router();
const { joinContest, getUserContests } = require("../controllers/contestController");
const { authenticateToken } = require("../middleware/authmiddleware");

router.post("/join", authenticateToken, joinContest);
router.get("/user", authenticateToken, getUserContests);

module.exports = router;
