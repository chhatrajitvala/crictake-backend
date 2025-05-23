const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
  contestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contest",
    required: true,
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  points: {
    type: Number,
    required: true,
    default: 0,
  },
  rank: {
    type: Number,
    default: null,
  },
  isFake: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Leaderboard", leaderboardSchema);
