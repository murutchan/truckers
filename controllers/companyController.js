const { validationResult } = require("express-validator");
const Company = require("../models/Company");
const { post } = require("../routes/api/company");

//create or update company
exports.createCompany = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const {
    companyName,
    address,
    city,
    zip,
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
    cargoInsurance,
    eld,
    truckRent,
    dotNumber,
  } = req.body;

  //Build Company Objects
  const companyFields = {};
  companyFields.user = req.user.id;

  if (companyName) companyFields.companyName = companyName;
  if (dotNumber) companyFields.dotNumber = dotNumber;

  if (address) companyFields.address = address;
  if (city) companyFields.city = city;
  if (zip) companyFields.zip = zip;
  if (phone) companyFields.phone = phone;
  if (email) companyFields.email = email;

  //build requirement object
  companyFields.requirements = {};
  if (age) companyFields.requirements.age = age;
  if (experience) companyFields.requirements.experience = experience;
  if (deposit) companyFields.requirements.deposit = deposit;

  companyFields.perks = {};
  if (parking) companyFields.perks.parking = parking;
  if (inspectionBonus) companyFields.perks.inspectionBonus = inspectionBonus;
  if (referralBonus) companyFields.perks.referralBonus = referralBonus;
  if (otherBonuses) companyFields.perks.otherBonuses = otherBonuses;

  companyFields.fees = {};
  if (companyFee) companyFields.fees.companyFee = companyFee;
  if (cargoInsurance) companyFields.fees.cargoInsurance = cargoInsurance;
  if (eld) companyFields.fees.eld = eld;
  if (truckRent) companyFields.fees.truckRent = truckRent;

  try {
    let company = new Company(companyFields);
    await company.save();
    res.json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: "Server Error" });
  }
};

//get ALL companies

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      errors: "Server error",
    });
  }
};

//add likes
exports.likeCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    //we check if post was already liked
    if (
      company.likes.filter((like) => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ errors: "Company was already liked" });
    }
    company.likes.unshift({ user: req.user.id });
    await company.save();
    res.json(company.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      errors: "server error",
    });
  }
};
