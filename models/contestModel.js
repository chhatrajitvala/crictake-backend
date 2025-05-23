const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
  matchId: { type: String, required: true },
  entryFee: { type: Number, required: true },
  totalSpots: { type: Number, required: true },
  spotsLeft: { type: Number, required: true },
  prizePool: { type: Number, required: true },
  participants: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      teamId: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
      isFake: { type: Boolean, default: false }
    }
  ],
  winners: [{ userId: String, teamId: String }], // will be populated later
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contest", contestSchema);
