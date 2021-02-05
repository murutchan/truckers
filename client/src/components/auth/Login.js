import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./register.styles.css";
import { setAlert } from "../../actions/alert";

const Login = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //destructuring formData
  const { email, password } = formData;

  //all input fields on change
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //when submit button is pressed
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-form">
      <form onSubmit={onSubmit}>
        <h2>Sign In</h2>
        <p className="lead">You can always change your password</p>
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
        <div className="form-group mt-5">
          <button type="submit" className="btn btn-primary btn-block btn-lg">
            Sign In
          </button>
        </div>

        <p className="small text-center">
          If you forgot your password
          <br />
          <a href="#">You can reset your password here</a>
        </p>
      </form>
      <div className="text-center">
        Dont have an account? <Link to="/register">Create account here</Link>.
      </div>
    </div>
  );
};
Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Login);
