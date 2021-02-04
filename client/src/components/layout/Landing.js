import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import authReducer from "../../reducers/auth";
import SemiTruck from "../video/semitruck.mp4";
import Driver from "../../img/Driver.png";

const Landing = ({ isAuthenticated }) => {
  //   if (isAuthenticated) {
  //     return <Redirect to="/dashboard" />;
  //   }

  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          opacity: "0.8",
        }}
      >
        <source src={SemiTruck} type="video/mp4" />
      </video>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">TRUCKERS connect</h1>
            <p className="lead mb-4">
              <span className="text-primary" style={{ fontSize: "1.5rem" }}>
                <strong> Find </strong>{" "}
              </span>
              your dream company.{" "}
              <span className="text-warning" style={{ fontSize: "1.5rem" }}>
                <strong> Buy </strong>{" "}
              </span>
              your dream truck.{" "}
              <span className="text-success" style={{ fontSize: "1.5rem" }}>
                <strong> Meet </strong>{" "}
              </span>
              the best mechanics
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
              <Link>
                <h5 className="text-muted mt-5">skip &#10140;</h5>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({ isAuthenticated: state.auth });

export default connect(mapStateToProps)(Landing);
