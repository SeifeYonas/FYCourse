import React from "react";
import "./stylesignuppage.css";
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
//import './SignUpPageCSS.css';
//you would import the css file here

function SignUpPage() {
  return (
    <div>
     <Navigation></Navigation>

    <Jumbotron id="jumbosignup">
    <div className="signup">
      <Form>
      <Form.Group controlId="formGridAddress1">
          <Form.Label className="wordcolor">First Name</Form.Label>
          <Form.Control id="blackborder" className="formsize" placeholder="John Doe" />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label className="wordcolor">Last Name</Form.Label>
          <Form.Control id="blackborder" className="formsize" placeholder="John Doe" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="wordcolor">Email</Form.Label>
            <Form.Control
              className="formsize"
              type="email"
              placeholder="Enter email"
              id="blackborder"
            />
          </Form.Group>
        </Form.Row>

        <div id="shiftuser">
        <Form.Row>
          <Form.Group controlId="formGridAddress1">
            <Form.Label className="wordcolor">Username</Form.Label>
            <Form.Control id="blackborder" className="formsize" placeholder="User" />
          </Form.Group>
        </Form.Row>
        </div>

        <Form.Row> </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="wordcolor">Password</Form.Label>
            <Form.Control
            id="blackborder"
              className="formsize"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="wordcolor">Confirm Password</Form.Label>
            <Form.Control
            id="blackborder"
              className="formsize"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form.Row>
        

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="wordcolor">City</Form.Label>
            <Form.Control id="blackborder" className="formsize" placeholder="Atlanta" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="wordcolor">State</Form.Label>
            <Form.Control
            id="blackborder"
              className="formsize"
              as="select"
              defaultValue="Choose..."
            >
              <option>Choose...</option>
              <option>Alabama</option>
              <option>Alaska</option>
              <option>Arizona</option>
              <option>Arkansas</option>
              <option>California</option>
              <option>Colorado</option>
              <option>Connecticut</option>
              <option>Delaware</option>
              <option>Florida</option>
              <option>Georgia</option>
              <option>Hawaii</option>
              <option>Idaho</option>
              <option>Illinois</option>
              <option>Indiana</option>
              <option>Kansas</option>
              <option>Kentucky</option>
              <option>Louisiana</option>
              <option>Maine</option>
              <option>Maryland</option>
              <option>Massachusetts</option>
              <option>Michigan</option>
              <option>Minnesota</option>
              <option>Mississippi</option>
              <option>Missouri</option>
              <option>Montana</option>
              <option>Nebraska</option>
              <option>Nevada</option>
              <option>New Hampshire</option>
              <option>New Jersey</option>
              <option>New Mexico</option>
              <option>New York</option>
              <option>North Carolina</option>
              <option>North Dakota</option>
              <option>Ohio</option>
              <option>Oklahoma</option>
              <option>Oregon</option>
              <option>Pennsylvania</option>
              <option>Rhode Island</option>
              <option>South Carolina</option>
              <option>South Dakota</option>
              <option>Tennessee</option>
              <option>Texas</option>
              <option>Utah</option>
              <option>Vermont</option>
              <option>Virginia</option>
              <option>Washington</option>
              <option>West Virginia</option>
              <option>Wisconsin</option>
              <option>Wyoming</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="wordcolor">Zip</Form.Label>
            <Form.Control id="blackborder" className="formsize" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Keep me signed in" />
          </Form.Group>{" "}
        </Form.Row>

        <Form.Row>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form.Row>
      </Form>
      </div>
      <br/>
      <p className="bottompara">Sign up and find the right course for you now!</p>
    </Jumbotron>
    </div>
  );
}
export default SignUpPage;
