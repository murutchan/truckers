import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserCompanies } from "../../actions/company";
import { deleteCompany } from "../../actions/company";

const Dashboard = ({
  getUserCompanies,
  companies,
  auth: { user },
  deleteCompany,
  history,
}) => {
  const id = user._id;
  useEffect(() => {
    getUserCompanies(id);
  }, [getUserCompanies]);

  console.log(companies);
  console.log(user);
  return (
    <div className="container w-75">
      <div className="row">
        <Link to="/registerCompany">
          <button className="btn btn-primary w-100">
            Register your company
          </button>
        </Link>
      </div>
      <div className="row mt-5 text-info">
        <h5 className="mb-5">Listed companies</h5>
        <hr />
      </div>

      {companies.map((company) => (
        <div className="row border-bottom pb-2 w-100 mb-4" key={company._id}>
          <div className="col-sm-6">
            <h5>{company.companyName}</h5>
          </div>
          <div className="col-lg-5 ">
            <button className="btn btn-sm btn-info">Edit</button>

            <button
              className="btn btn-sm btn-danger"
              onClick={(e) => {
                e.preventDefault();
                if (
                  window.confirm(
                    `Are you sure you wish to delete your company ${company.companyName}?`
                  )
                ) {
                  deleteCompany(company._id, history);
                  window.location.reload(true);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object,
  companies: PropTypes.array,
  getUserCompanies: PropTypes.func.isRequired,
  deleteCompany: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  companies: state.company.companies,
});

export default connect(mapStateToProps, { getUserCompanies, deleteCompany })(
  Dashboard
);
