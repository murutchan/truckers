import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>
        <Link to="/">DRIVERS connect</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">Companies</Nav.Link>
          <Nav.Link href="#1">Trucks</Nav.Link>
          <Nav.Link href="#2">Mechanics</Nav.Link>
          <Nav.Link href="#3">Food</Nav.Link>
          <Nav.Link href="#4">Services</Nav.Link>
          <Nav.Link href="/register" className="text-warning">
            Sign up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
