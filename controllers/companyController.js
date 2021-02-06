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
    cargoInsurance,
    eld,
    truckRent,
  } = req.body;

  //Build Company Objects
  const companyFields = {};
  companyFields.user = req.user.id;

  if (name) companyFields.name = name;
  if (address) companyFields.address = address;
  if (city) companyFields.city = city;
  if (zip) companyFields.zip = zip;
  if (country) companyFields.country = country;
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
    res.status(500).send("Server Error");
  }
};
