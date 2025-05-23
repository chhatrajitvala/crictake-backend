const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  matchId: { type: String, required: true, unique: true },
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
  startTime: { type: Date, required: true },
  status: { type: String, enum: ["upcoming", "live", "completed"], default: "upcoming" },
});

module.exports = mongoose.model("Match", matchSchema);

