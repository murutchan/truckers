import React from "react";
import "./dashboard.styles.scss";

const RegisterCompany = () => {
  const states = ["IL", "OH", "IN", "NJ", "IA", "NY", "PA", "CA", "TX"];
  return (
    <form>
      <h3 className="text-center text-info">Company info</h3>
      <hr />
      <div className="form-row mt-4">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Company Name</label>
          <input
            type="name"
            className="form-control"
            id="inputEmail4"
            placeholder="Your company's name"
          />
        </div>
        <div className="form-group col-md-6">
          <label for="inputPassword4">DOT Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="dot number"
            name="dotnumber"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
          />
        </div>
        <div className="form-group col-md-6">
          <label for="inputPassword4">Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="phone number"
            name="phonenumber"
          />
        </div>
      </div>

      <div className="form-group">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
          name="address"
        />
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" className="form-control" name="city" />
        </div>
        <div className="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" className="form-control" name="zip" />
        </div>
      </div>
      <h3 className="text-center text-info mt-4">Driver requirements</h3>
      <hr />

      <div className="form-row">
        <div className="form-group col-md-4">
          <label for="inputCity">Minimum years of experience</label>
          <select name="experience" className="form-control">
            <option selected>Choose...</option>
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
          <label for="inputState">Minimum Age</label>
          <select name="age" className="form-control">
            <option selected>Select...</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>25 & up</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label for="inputZip">Deposit ($$)</label>
          <select name="deposit" className="form-control">
            <option selected>Select...</option>
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
          <label for="inputCity">Driver Referral Bonus</label>
          <select name="referralBonus" className="form-control">
            <option selected>Choose...</option>
            <option>No bonus</option>
            <option>200$</option>
            <option>250$</option>
            <option>300$</option>
            <option>500$</option>
            <option>up to 1000$</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label for="inputState">Inspection Bonus</label>
          <select name="inspectionBonus" className="form-control">
            <option selected>Select...</option>
            <option>100$</option>
            <option>150$</option>
            <option>200$</option>
            <option>300$</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label for="inputState">truck parking</label>
          <select name="parking" className="form-control">
            <option selected>Select...</option>
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
          <label for="inputCity">Company fee from gross (%)</label>
          <select name="companyFee" className="form-control">
            <option selected>Choose...</option>
            <option>10</option>
            <option>12</option>
            <option>14</option>
            <option>15</option>
            <option>18</option>
            <option>20</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label for="inputCity">Cargo Insurance ($)</label>
          <select name="cargoInsurance" className="form-control">
            <option selected>Choose...</option>
            <option>200</option>
            <option>250</option>
            <option>300</option>
            <option>350</option>
            <option>400</option>
            <option>450</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label for="inputCity">Truck Rent ($)</label>
          <select name="truckRent" className="form-control">
            <option selected>Choose...</option>
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

export default RegisterCompany;
