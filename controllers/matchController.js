const Match = require("../models/matchModel");

exports.addMatch = async (req, res) => {
  try {
    const { matchId, teams, dateTime } = req.body;
    const match = new Match({ matchId, teams, dateTime });
    await match.save();
    res.status(200).json({ message: "Match added successfully", match });
  } catch (err) {
    res.status(500).json({ message: "Adding match failed", error: err.message });
  }
};

exports.getMatches = async (req, res) => {
  try {
    const matches = await Match.find().sort({ dateTime: 1 });
    res.status(200).json(matches);
  } catch (err) {
    res.status(500).json({ message: "Fetching matches failed", error: err.message });
  }
};
