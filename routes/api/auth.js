const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../../controllers/authController");
const auth = require("../../middleware/auth");

//get auth by token

router.get("/", auth, authController.loadUser);

//sign in
router.post(
  "/",
  check("email", "Please include a valid email").isEmail(),
  check("password", "Please enter matching password").exists(),
  authController.loginUser
);

module.exports = router;
