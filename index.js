const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection failed:", err.message));

// Routes
const authRoutes = require("./routes/authRoutes");
const matchRoutes = require("./routes/matchRoutes");
const teamRoutes = require("./routes/teamRoutes");
const contestRoutes = require("./routes/contestRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const fakeWinnersRoutes = require("./routes/fakeWinnersRoutes");

app.use("/register", authRoutes);
app.use("/login", authRoutes);
app.use("/matches", matchRoutes);
app.use("/teams", teamRoutes);
app.use("/contests", contestRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/fakewinners", fakeWinnersRoutes);

// Base Route
app.get("/", (req, res) => {
  res.send("Crictake Backend API is running ✅");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
