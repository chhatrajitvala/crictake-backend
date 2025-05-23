const Team = require("../models/Teammodel");

exports.createTeam = async (req, res) => {
  try {
    const { userId, matchId, players } = req.body;
    const team = new Team({ userId, matchId, players });
    await team.save();
    res.status(200).json({ message: "Team created successfully", team });
  } catch (err) {
    res.status(500).json({ message: "Creating team failed", error: err.message });
  }
};

exports.getUserTeams = async (req, res) => {
  try {
    const { userId, matchId } = req.params;
    const teams = await Team.find({ userId, matchId });
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ message: "Fetching user teams failed", error: err.message });
  }
};
