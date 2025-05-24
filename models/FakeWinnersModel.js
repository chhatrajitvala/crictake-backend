const mongoose = require("mongoose");

const fakeWinnersSchema = new mongoose.Schema({
  matchId: {
    type: String,
    required: true,
    unique: true,
  },
  fakeUserIds: [
    {
      type: String,
    },
  ],
});

const FakeWinner = mongoose.model("FakeWinner", fakeWinnersSchema);

module.exports = FakeWinner;
