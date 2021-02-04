import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./register.styles.css";
import { setAlert } from "../../actions/alert";
import { registerUser } from "../../actions/auth";

const Register = ({ setAlert, registerUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  //destructuring formData
  const { name, email, password, confirm_password } = formData;

  //all input fields on change
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //when submit button is pressed
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerUser({ name, email, password });
    }
  };

  return (
    <div className="signup-form">
      <form onSubmit={onSubmit}>
        <h2>Create Account</h2>
        <p className="lead">It's free and hardly takes more than 30 seconds.</p>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              required="required"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-paper-plane"></i>
            </span>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              required="required"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-lock"></i>
              <i className="fa fa-check"></i>
            </span>
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block btn-lg">
            Sign Up
          </button>
        </div>
        <p className="small text-center">
          By clicking the Sign Up button, you agree to our <br />
          <a href="#">Terms &amp; Conditions</a>, and{" "}
          <a href="#">Privacy Policy</a>.
        </p>
      </form>
      <div className="text-center">
        Already have an account? <Link to="/login">Login here</Link>.
      </div>
    </div>
  );
};
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, registerUser })(Register);
