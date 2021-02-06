import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllCompanies } from "../../actions/company";

const Companies = ({ companies, getAllCompanies }) => {
  useEffect(() => {
    getAllCompanies();
    console.log(companies);
  }, [getAllCompanies]);
  console.log(companies);

  return (
    <div className="container">
      {companies.map((company) => (
        <div className="w-100 mb-3">
          <h1>Company: {company.companyName}</h1>
          <p> phoneNumber: {company.phone} </p>
          <p> address: {company.address} </p>
          <p> City: {company.city} </p>
          <p> State: {company.state} </p>
          <button className="btn btn-outline-primary btn-sm">&#8593; </button>
        </div>
      ))}
    </div>
  );
};
Companies.propTypes = {
  companies: PropTypes.array.isRequired,
  getAllCompanies: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  companies: state.company.companies,
});

export default connect(mapStateToProps, { getAllCompanies })(Companies);
