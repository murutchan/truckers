import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllCompanies } from "../../actions/company";
import { addLike } from "../../actions/company";
import { removeLike } from "../../actions/company";
import Pagination from "../company/Pagination";
import "./company.styles.scss";

const Companies = ({ companies, getAllCompanies, addLike, removeLike }) => {
  useEffect(() => {
    getAllCompanies();
  }, [getAllCompanies]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  //Pagination: get current companies
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentCompanies = companies.slice(indexOfFirst, indexOfLast);
  //Pagination: change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      {currentCompanies.map((company) => (
        <div
          className="container company mb-3 border text-center"
          key={company._id}
        >
          <div className="row mx-auto">
            <h2 className="text-success mt-3 mx-auto">{company.companyName}</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <i className="fas fa-map-marked-alt mr-2 text-info"></i>
                {company.address}, {company.city},
                {company.state && company.state},{company.zip}{" "}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <i className="fas fa-phone-square-alt mr-2 text-info"></i>
                {company.phone}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 inner-card">
              <p>Company fee</p>

              <hr />
              <h3>
                {company.fees.companyFee ? company.fees.companyFee : "unknown"}%
              </h3>
            </div>
            <div className="col-md-3 inner-card">
              <p>Referral Bonus</p>
              <hr />
              <h3>
                {company.perks.referralBonus
                  ? company.perks.referralBonus
                  : "unknown"}
              </h3>
            </div>
            <div className="col-md-3 inner-card">
              <p>Minimum age</p>
              <hr />
              <h3>
                {company.requirements.age
                  ? company.requirements.age
                  : "unknown"}
              </h3>
            </div>
            <div className="col-md-3 inner-card">
              <p>Minimum experience</p>
              <hr />
              <h5>
                {company.requirements.experience
                  ? company.requirements.experience
                  : "unknown"}
              </h5>
            </div>
          </div>

          <button
            className="btn btn-light btn-sm mb-3 ml-auto"
            onClick={(e) => addLike(company._id)}
          >
            <i className="fas fa-thumbs-up"></i>{" "}
            {company.likes.length > 0 && company.likes !== undefined && (
              <span> {company.likes.length}</span>
            )}
          </button>
          <button
            className="btn btn-light btn-sm mb-3"
            onClick={() => removeLike(company._id)}
          >
            <i className="fas fa-thumbs-down"></i>
          </button>
        </div>
      ))}
      <Pagination
        perPage={perPage}
        companies={companies.length}
        paginate={paginate}
      />
    </div>
  );
};
Companies.propTypes = {
  companies: PropTypes.array.isRequired,
  getAllCompanies: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  companies: state.company.companies,
});

export default connect(mapStateToProps, {
  getAllCompanies,
  addLike,
  removeLike,
})(Companies);
