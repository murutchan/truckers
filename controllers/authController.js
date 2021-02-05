const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errors: [{ message: "please enter right credentials" }],
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        errors: [{ message: "Invalid credentials" }],
      });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, config.get("jwtSecret")),
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        //if user entered correct credentials we send him back a token
        res.json({ token });
      };
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ message: "Server error" }] });
  }
};
