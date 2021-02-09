const { validationResult } = require("express-validator");
const { isValidObjectId } = require("mongoose");
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
    res.status(500).send("server error");
  }
};

//get ALL companies

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
};

//get user companies only
exports.getUserCompanies = async (req, res) => {
  try {
    const company = await Company.find({ user: req.params.id });
    if (company) {
      res.status(200).json(company);
    } else {
      res.status(404).send("No company found ");
    }
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).send("Post not found");
    }
  }
};

//delete company
exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(400).send("no company found");
    }
    if (company.user.toString() !== req.user.id) {
      return res.status(401).send("USer not authorized");
    }
    await company.remove();
    res.status(200).send("company deleted successfully");
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send("Post not found");
    }
    console.error(err.message);
    res.status(400).send("Server error");
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
      return res.status(400).send("Company was already liked");
    }
    company.likes.unshift({ user: req.user.id });
    await company.save();
    res.json(company.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

//@route PUT api/company/unlike/:id
//@desc unlike a company if you liked it before
//@access Private

exports.unlikeCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    //Check if the company has already been liked
    if (
      company.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).send("Company has not been liked yet");
    }
    //get remove index
    const removeIndex = company.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);
    company.likes.splice(removeIndex, 1);
    await company.save();
    res.json(company.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
