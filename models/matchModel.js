const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  matchId: { type: String, required: true },
  players: [{
    playerId: String,
    name: String,
    role: String,
  }],
  captain: String,
  viceCaptain: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Team", teamSchema);

