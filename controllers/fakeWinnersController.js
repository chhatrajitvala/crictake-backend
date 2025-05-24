const FakeWinner = require("../models/FakeWinnersModel");
const Leaderboard = require("../models/leaderboardModel");

const setFakeWinners = async (req, res) => {
  try {
    const { matchId, winners } = req.body;

    await FakeWinner.findOneAndUpdate(
      { matchId },
      { winners },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Fake winners set successfully" });
  } catch (error) {
    console.error("Error setting fake winners:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getFakeWinners = async (req, res) => {
  try {
    const { matchId } = req.params;

    const fakeData = await FakeWinner.findOne({ matchId });
    if (!fakeData) {
      return res.status(404).json({ message: "No fake winners set for this match" });
    }

    const fullDetails = await Leaderboard.find({
      matchId,
      userId: { $in: fakeData.winners },
    }).populate("userId");

    res.status(200).json(fullDetails);
  } catch (error) {
    console.error("Error fetching fake winners:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  setFakeWinners,
  getFakeWinners,
};
