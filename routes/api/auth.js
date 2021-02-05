const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../../controllers/authController");
const authMiddleware = require("../../middleware/auth");

//get auth by token

router.get("/", authMiddleware, authController.loadUser);

//sign in
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter matching password").exists(),
  ],
  authController.loginUser
);

module.exports = router;
