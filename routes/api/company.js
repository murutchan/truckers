const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../../middleware/auth");
const companyController = require("../../controllers/companyController");

router.post(
  "/",
  [
    auth,
    [
      check("companyName", "CompanyName is required").not().isEmpty(),
      check("address", "Please enter your address").not().isEmpty(),
      check("city", "Please enter your city").not().isEmpty(),
      check("zip", "Please enter your zip").not().isEmpty(),
      check("phone", "Please enter your phone").not().isEmpty(),
      check("email", "Please enter your email").isEmail(),
    ],
  ],
  companyController.createCompany
);

router.get("/", companyController.getAllCompanies);

module.exports = router;
