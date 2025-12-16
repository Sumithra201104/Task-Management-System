const express = require("express");
const protect = require("../middleware/auth.middleware");
const adminOnly = require("../middleware/role.middleware");
const User = require("../models/User");

const router = express.Router();

router.get("/users", protect, adminOnly, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

module.exports = router;
