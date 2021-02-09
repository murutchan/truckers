const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  companyName: {
    type: String,
    required: true,
  },
  dotNumber: {
    type: String,
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
      type: String,
    },
    experience: {
      type: String,
    },
    deposit: {
      type: String,
    },
  },
  perks: {
    parking: {
      type: Boolean,
    },

    inspectionBonus: {
      type: String,
    },
    referralBonus: {
      type: String,
    },
    otherBonuses: {
      type: String,
    },
  },

  fees: {
    companyFee: {
      type: String,
    },
    cargoInsurance: {
      type: String,
    },
    eld: {
      type: String,
    },
    truckRent: {
      type: String,
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
