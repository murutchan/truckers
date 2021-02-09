import React from "react";
import { Link } from "react-router-dom";

import "./dashboard.styles.scss";

const Dashboard = () => {
  // const id = user._id;
  // useEffect(() => {
  //   getUserCompanies(id);
  // }, []);

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
    </div>
  );
};

// Dashboard.propTypes = {
//   getUserCompanies: PropTypes.func.isRequired,
//   companies: PropTypes.array.isRequired,
//   user: PropTypes.object,
// };

// const mapStateToProps = (state) => ({
//   companies: state.company.companies,
//   user: state.auth.user,
// });

export default Dashboard;
