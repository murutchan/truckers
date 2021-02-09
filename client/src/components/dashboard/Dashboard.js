import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./dashboard.styles.scss";

import { getUserCompanies } from "../../actions/company";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Dashboard = ({ getUserCompanies, companies, user: { _id } }) => {
  useEffect(() => {
    getUserCompanies(_id);
  }, [getUserCompanies]);
  return (
    <div className="container">
      <div className="row">
        <Link to="/registerCompany">
          <button className="btn btn-primary w-100">
            Register your company
          </button>
        </Link>
      </div>
      <div className="row mt-5 text-info">
        <h5>Listed companies</h5>
        <hr />
      </div>
      {companies &&
        companies.map((company) => (
          <div className="row">
            <div className="col-md-6">{company.companyName}</div>
            <div className="col-md-3">
              <button className="btn btn-md btn-info">Edit</button>
              <button className="btn btn-md btn-info">delete</button>
            </div>
            <div className="col-md-3"></div>
          </div>
        ))}
    </div>
  );
};

Dashboard.propTypes = {
  getUserCompanies: PropTypes.func.isRequired,
  companies: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  companies: state.company.companies,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getUserCompanies })(Dashboard);
