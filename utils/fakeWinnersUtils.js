const FakeWinner = require("../models/FakeWinnersModel");

const isFakeWinner = async (matchId, userId) => {
  const record = await FakeWinner.findOne({ matchId });
  return record?.fakeUserIds.includes(userId) || false;
};

module.exports = { isFakeWinner };
