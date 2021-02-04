const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");

exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  //desctructuring a input (which comes as body);
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({
        errors: [{ message: "user already exists" }],
      });
    }

    //creating a new user
    user = new User({
      name,
      email,
      password,
    });

    //encrypting a password before saving a user
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    //saving a user in a database
    await user.save();
    //As a response we send back a jwt token (for authorization)
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 40000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: "server error",
    });
  }
};
