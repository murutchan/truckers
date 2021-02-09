import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/auth";

const Navigation = ({ auth: { isAuthenticated, loading }, logoutUser }) => {
  //navigation will be shown when user is signed in
  const authLinks = (
    <Nav className="ml-auto">
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/Profile">Profile</Nav.Link>
      <Nav.Link
        href="/"
        className="text-warning"
        onClick={(e) => {
          e.preventDefault();
          if (window.confirm("Please confirm you are logging out")) {
            logoutUser();
          }
        }}
      >
        Logout &#8227;
      </Nav.Link>
    </Nav>
  );
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>
        <Nav.Link href="/">DRIVERS connect</Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={isAuthenticated ? "mr-auto" : "ml-auto"}>
          <Nav.Link href="/companies">Companies</Nav.Link>
          <Nav.Link href="/trucks">Trucks</Nav.Link>
          <Nav.Link href="/mechanics">Mechanics</Nav.Link>
          <Nav.Link href="/food">Food</Nav.Link>
          <Nav.Link href="/services">Other Services</Nav.Link>
          {!isAuthenticated && (
            <Nav>
              <Nav.Link href="/login" className="text-warning">
                Sign in
              </Nav.Link>
              <Nav.Link href="/register" className="text-info">
                Sign up
              </Nav.Link>
            </Nav>
          )}
        </Nav>
        {isAuthenticated && !loading && authLinks}
      </Navbar.Collapse>
    </Navbar>
  );
};
Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Navigation);
