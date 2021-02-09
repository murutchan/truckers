import React from "react";
import { Link } from "react-router-dom";

// import "./dashboard.styles.scss";

const Dashboard = () => {
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

export default Dashboard;
