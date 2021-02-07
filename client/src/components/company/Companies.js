import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllCompanies } from "../../actions/company";
import { addLike } from "../../actions/company";
import { removeLike } from "../../actions/company";

const Companies = ({ companies, getAllCompanies, addLike, removeLike }) => {
  useEffect(() => {
    getAllCompanies();
    console.log(companies);
  }, [getAllCompanies]);
  console.log(companies);

  return (
    <div className="container ">
      {companies.map((company) => (
        <div className="w-100 mb-3  border">
          <h1>Company: {company.companyName}</h1>
          <p> phoneNumber: {company.phone} </p>
          <p> address: {company.address} </p>
          <p> City: {company.city} </p>
          <p> State: {company.state} </p>
          <button
            className="btn btn-light btn-sm"
            onClick={(e) => addLike(company._id)}
          >
            <i class="fas fa-thumbs-up"></i>{" "}
            {company.likes.length > 0 && company.likes !== undefined && (
              <span> {company.likes.length}</span>
            )}
          </button>
          <button
            type="button"
            class="btn btn-light"
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
