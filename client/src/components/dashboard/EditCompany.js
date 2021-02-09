import React, { useEffect } from "react";
import "./dashboard.styles.scss";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createCompany } from "../../actions/company";
import { getCompany } from "../../actions/company";

const EditCompany = ({
  createCompany,
  getCompany,
  history,
  auth: { loading, isAuthenticated },
  company: { company },
}) => {
  const states = ["IL", "OH", "IN", "NJ", "IA", "NY", "PA", "CA", "TX"];
  const { register, handleSubmit } = useForm({});

  useEffect(() => {
    getCompany(company._id);
  }, []);
  const onSubmit = (data) => {
    const {
      address,
      companyName,
      city,
      state,
      phone,
      email,
      zip,
      companyFee,
      referralBonus,
      age,
      experience,
    } = data;
    const formData = {
      address,
      companyName,
      city,
      state,
      phone,
      email,
      zip,
      companyFee,
      referralBonus,
      age,
      experience,
    };
    createCompany(formData, history, true);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-center text-info">Company info</h3>
      <hr />
      <div className="form-row mt-4">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Company Name</label>
          <input
            type="name"
            className="form-control"
            name="companyName"
            placeholder="Your company's name"
            required
            ref={register}
          />
        </div>
        <div className="form-group col-md-6">
          <label>DOT Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="dot number"
            name="dotnumber"
            ref={register}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
            ref={register}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="phone number"
            name="phone"
            ref={register}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="1234 Main St"
          name="address"
          ref={register}
        />
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            ref={register}
          />
        </div>
        <div className="form-group col-md-4">
          <label>State</label>
          <select name="state" className="form-control" ref={register}>
            <option selected>Choose...</option>
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-2">
          <label>Zip</label>
          <input
            type="number"
            className="form-control"
            name="zip"
            ref={register}
          />
        </div>
      </div>
      <h3 className="text-center text-info mt-4">Driver requirements</h3>
      <hr />

      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Minimum years of experience</label>
          <select name="experience" className="form-control" ref={register}>
            <option value="none" selected disabled>
              Select an Option
            </option>
            <option>No experience required</option>
            <option>1-3 months experience</option>
            <option>3-6 months experience</option>
            <option>6-12 months experience</option>
            <option>1 year experience</option>
            <option>1.5 years experience</option>
            <option>2 years experience</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Minimum Age</label>
          <select name="age" className="form-control" ref={register}>
            <option value="none" selected disabled>
              Select an Option
            </option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>25 & up</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Deposit ($$)</label>
          <select name="deposit" className="form-control" ref={register}>
            <option value="none" selected disabled>
              Select an Option
            </option>
            <option>No Deposit</option>
            <option>500$</option>
            <option>1000$</option>
            <option>1500$</option>
            <option>2000$</option>
            <option>2500$</option>
          </select>
        </div>
      </div>
      <h3 className="text-center text-info mt-4">Company Perks</h3>
      <hr />
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Driver Referral Bonus</label>
          <select name="referralBonus" className="form-control" ref={register}>
            <option value="none" selected disabled>
              Select an Option
            </option>
            <option>No bonus</option>
            <option>200$</option>
            <option>250$</option>
            <option>300$</option>
            <option>500$</option>
            <option>up to 1000$</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Inspection Bonus</label>
          <select
            name="inspectionBonus"
            className="form-control"
            ref={register}
          >
            <option value="none" selected disabled>
              Select an Option
            </option>
            <option>100$</option>
            <option>150$</option>
            <option>200$</option>
            <option>300$</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>truck parking</label>
          <select name="parking" className="form-control" ref={register}>
            <option value="none" selected disabled>
              Select an Option
            </option>
            <option>we have a parking lot</option>
            <option>we help you find a parking lot</option>
            <option>we will pay for your parking</option>
            <option>No truck parking</option>
          </select>
        </div>
      </div>
      <h3 className="text-center text-info mt-4">Company fees</h3>
      <hr />
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Company fee from gross (%)</label>
          <select name="companyFee" className="form-control" ref={register}>
            <option value="none" selected disabled>
              Select an Option
            </option>
            <option>10</option>
            <option>12</option>
            <option>14</option>
            <option>15</option>
            <option>18</option>
            <option>20</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Cargo Insurance ($)</label>
          <select name="cargoInsurance" className="form-control" ref={register}>
            <option value="none" selected disabled>
              Select an Option
            </option>
            <option>200</option>
            <option>250</option>
            <option>300</option>
            <option>350</option>
            <option>400</option>
            <option>450</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Truck Rent ($)</label>
          <select name="truckRent" className="form-control" ref={register}>
            <option value="none" selected disabled>
              Select an Option
            </option>
            <option>800</option>
            <option>900</option>
            <option>1000</option>
            <option>1200</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-info col-md-12 mt-4 ">
        Submit
      </button>
    </form>
  );
};
EditCompany.propTypes = {
  createCompany: PropTypes.func.isRequired,
  getCompany: PropTypes.func.isRequired,
  company: PropTypes.object,
  auth: PropTypes.object,
};
const mapStateToProps = (state) => ({
  company: state.company,
  auth: state.auth,
});

export default connect(mapStateToProps, { createCompany, getCompany })(
  EditCompany
);
