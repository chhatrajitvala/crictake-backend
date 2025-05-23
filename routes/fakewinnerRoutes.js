const express = require("express");
const router = express.Router();
const { setFakeWinners, getFakeWinners } = require("../controllers/fakeWinnersController");

router.post("/set", setFakeWinners);
router.get("/get/:matchId", getFakeWinners);

module.exports = router;
