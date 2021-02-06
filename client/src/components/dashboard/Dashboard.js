import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.styles.scss";
import RegisterCompany from "./RegisterCompany";

const Dashboard = () => {
  return (
    <div class="row">
      <Link to="/registerCompany">
        <button className="btn btn-primary w-100">Register your company</button>
      </Link>
    </div>
  );
};

export default Dashboard;
