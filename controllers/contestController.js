const Contest = require("../models/contestmodel");

exports.joinContest = async (req, res) => {
  try {
    const { contestId, userId, teamId } = req.body;

    const contest = await Contest.findById(contestId);
    if (!contest) return res.status(404).json({ message: "Contest not found" });

    contest.entries.push({ userId, teamId });
    await contest.save();

    res.status(200).json({ message: "Contest joined successfully", contest });
  } catch (err) {
    res.status(500).json({ message: "Joining contest failed", error: err.message });
  }
};

exports.getUserContests = async (req, res) => {
  try {
    const { userId } = req.params;
    const contests = await Contest.find({ "entries.userId": userId });
    res.status(200).json(contests);
  } catch (err) {
    res.status(500).json({ message: "Fetching user contests failed", error: err.message });
  }
};
