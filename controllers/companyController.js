const { validationResult } = require("express-validator");
const Company = require("../models/Company");

//create or update company
exports.createCompany = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const {
    name,
    address,
    city,
    zip,
    country,
    phone,
    email,
    age,
    experience,
    deposit,
    parking,
    inspectionBonus,
    referralBonus,
    otherBonuses,
    companyFee,
    CargoInsurance,
    ELD,
    TruckRent,
  } = req.body;

  //Build Profile
  const CompanyFields = {};
};
