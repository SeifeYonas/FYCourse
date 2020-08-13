import React from "react";
import "./styleloginpage.css"
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Jumbotron from "react-bootstrap/Jumbotron";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";

function LogInPage() {
  return (
    <div>
      <Navigation></Navigation>
      <Jumbotron id="jumbologin">

        
        <h1 style={{color: "white", paddingLeft: 24}}>Sign in</h1>
        <br/>
        <div className="signin">
          <Form>
            <div id="pushemail">
            <Form.Row>
              <Form.Group controlId="formGridAddress1">
                <Form.Label className="wordcolor">Email</Form.Label>
                <Form.Control className="formsize" placeholder="Email Address" />
              </Form.Group>
            </Form.Row>
            </div>
            <Form.Row> </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="wordcolor">Password</Form.Label>
                <Form.Control
                  className="formsize"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form.Row>

            <div style={{paddingLeft: 7}}>
            <Form.Row>
              <span class="psw">
                <a style={{ color: "white" }} href="#">
                  Forgot password?
                </a>
              </span>
            </Form.Row>
            </div>
            <br/>

            <div style={{paddingLeft: 7}}>
            <Form.Row>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form.Row>
            </div>
          </Form>
        </div>
        <br />
        <br />
        <p className="bottomparagraph">Sign in and write a review now!</p>
      </Jumbotron>
    </div>
  );
}

export default LogInPage;
