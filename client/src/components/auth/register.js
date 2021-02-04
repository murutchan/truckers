import React from "react";

import "./register.styles.css";

const Register = () => {
  return (
    <div className="signup-form">
      <form>
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
              name="username"
              placeholder="Username"
              required="required"
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
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-lock"></i>
            </span>
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
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
              type="text"
              className="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
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
        Already have an account? <a href="#">Login here</a>.
      </div>
    </div>
  );
};

export default Register;
