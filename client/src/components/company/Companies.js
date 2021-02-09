import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllCompanies } from "../../actions/company";
import { addLike } from "../../actions/company";
import { removeLike } from "../../actions/company";
import "./company.styles.scss";

const Companies = ({ companies, getAllCompanies, addLike, removeLike }) => {
  useEffect(() => {
    getAllCompanies();
  }, [getAllCompanies]);

  return (
    <div className="container">
      {companies.map((company) => (
        <div className=" container mb-3 border text-center">
          <div className="row mx-auto">
            <h2 className="text-success mt-3 mx-auto">{company.companyName}</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <i class="fas fa-map-marked-alt mr-2 text-info"></i>
                {company.address}, {company.city},
                {company.state && company.state},{company.zip}{" "}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <i class="fas fa-phone-square-alt mr-2 text-info"></i>
                {company.phone}
              </p>
            </div>
          </div>

          <button
            className="btn btn-light btn-sm mb-3"
            onClick={(e) => addLike(company._id)}
          >
            <i class="fas fa-thumbs-up"></i>{" "}
            {company.likes.length > 0 && company.likes !== undefined && (
              <span> {company.likes.length}</span>
            )}
          </button>
          <button
            class="btn btn-light btn-sm mb-3"
            onClick={() => removeLike(company._id)}
          >
            <i class="fas fa-thumbs-down"></i>
          </button>
        </div>
      ))}
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
