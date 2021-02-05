import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./register.styles.css";
import { setAlert } from "../../actions/alert";
import { loginUser } from "../../actions/auth";

const Login = ({ isAuthenticated, loginUser }) => {
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
    loginUser(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth,
});
export default connect(mapStateToProps, { setAlert, loginUser })(Login);
