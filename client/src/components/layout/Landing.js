import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import authReducer from "../../reducers/auth";

const Landing = () => {
  return <form></form>;
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({ isAuthenticated: state.auth });

export default connect(mapStateToProps)(Landing);
