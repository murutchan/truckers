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
//get all companies
router.get("/", companyController.getAllCompanies);
router.get("/:id", auth, companyController.getUserCompanies);

//like buttons @route PUT api/company/like/:id
router.put("/like/:id", auth, companyController.likeCompany);
//unlike @route PUT api/company/unlike/:id
router.put("/unlike/:id", auth, companyController.unlikeCompany);

module.exports = router;
