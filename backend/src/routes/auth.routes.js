// auth.routes.js
const express = require("express");
const { register, login, logout } = require("../controllers/auth.controller");
const router = express.Router();

const protect = require("../middleware/auth.middleware");

router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
