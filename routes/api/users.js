const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const userController = require("../../controllers/userController");

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  userController.createUser
);

module.exports = router;
