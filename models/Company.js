const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  requirements: {
    age: {
      type: Number,
    },
    experience: {
      type: String,
    },
    deposit: {
      type: Number,
    },
  },
  perks: {
    parking: {
      type: Boolean,
    },

    inspectionBonus: {
      type: Number,
    },
    referralBonus: {
      type: Number,
    },
    otherBonuses: {
      type: String,
    },
  },

  fees: {
    companyFee: {
      type: Number,
    },
    cargoInsurance: {
      type: Number,
    },
    eld: {
      type: Number,
    },
    truckRent: {
      type: Number,
    },
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    },
  ],
});

module.exports = Company = mongoose.model("company", CompanySchema);