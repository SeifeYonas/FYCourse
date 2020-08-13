import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
          <Link to="/">
          <img className="logo" src="/images/logo.png" alt="logo" />
          </Link>

        <Nav className="ml-auto">

        <Link to="/AboutUsPage">
        <Button variant="dark">About Us</Button>{" "}
        </Link>

        <Link to="/CoursePage">
        <Button variant="dark">Contact Us</Button>{" "}
        </Link>

        <Link to="/LogInPage">
        <Button variant="dark">Login</Button>{" "}
        </Link>

        <Link to="/SignUpPage">
        <Button variant="outline-light" >Sign Up</Button>{" "}
        </Link>

        </Nav>
      </Navbar>
  );
}

export default Navigation;