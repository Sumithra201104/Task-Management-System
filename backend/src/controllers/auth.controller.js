const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",   // 🔑 IMPORTANT
    secure: false,     // true only for HTTPS
    maxAge: 24 * 60 * 60 * 1000
  });
};

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  generateToken(res, user._id);
  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json(user);
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};
