const Leaderboard = require("../models/leaderboardModel");

exports.updateLeaderboard = async (req, res) => {
  try {
    const { matchId, userId, points } = req.body;

    let record = await Leaderboard.findOne({ matchId, userId });
    if (record) {
      record.points = points;
      await record.save();
    } else {
      record = new Leaderboard({ matchId, userId, points });
      await record.save();
    }

    res.status(200).json({ message: "Leaderboard updated", record });
  } catch (err) {
    res.status(500).json({ message: "Updating leaderboard failed", error: err.message });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const { matchId } = req.params;
    const leaderboard = await Leaderboard.find({ matchId }).sort({ points: -1 });
    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: "Fetching leaderboard failed", error: err.message });
  }
};
