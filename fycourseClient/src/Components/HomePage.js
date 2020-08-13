import React from "react";
import "./stylehomepg.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import Dropdown from "react-bootstrap/Dropdown";

function HomePage() {
  return (
    <div>
      <Navigation></Navigation>

      <Jumbotron style={{ backgroundColor: "DodgerBlue" }}>
        <div class="row">
          <div class="column">
            <div id="centertopicssearch">
              <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropbutton">
                  Topics
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Artificial Intellegence
                    </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Full Stack
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Information Technology
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                   Cyber Security
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Data Science
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                   Python
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div class="column">
            <div id="searchbar">
              <Form inline>
                <FormControl
                  style={{ fontSize: 30 }}
                  id="navBarSearchForm"
                  type="text"
                  placeholder="Find my course"
                  className="mr-sm-2"
                />
                <Button
                  style={{ fontSize: 25 }}
                  id="buttoncolor"
                  variant="outline-light"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <h1 className="title" style={{ textAlign: "center", color: "white" }}>
          Find The Right Tech Course For You
        </h1>
        <br />
        <p style={{ textAlign: "center", color: "white", fontSize: 20 }}>
          | Get credible reviews from people that have already taken online and
          local in-person courses to make your search simple. |
        </p>
        <br />
        <br />
        <div id="writeareview" class="row">
          <div class="column">
            <p>
              <Button id="sizeofjumbobuttons" variant="outline-light" size="lg">
                Write a Review
              </Button>{" "}
            </p>
          </div>

          <div class="column">
            <p id="askaquestion">
              <Button id="sizeofjumbobuttons" variant="outline-light" size="lg">
                Ask a Question
              </Button>{" "}
            </p>
          </div>
        </div>
      </Jumbotron>
      <img className="laptop" src="/images/Laptop.png" alt="Laptop" />
      <br />
      <br />

      <Jumbotron id="jumboheight" style={{ backgroundColor: "DodgerBlue" }}>
        <p className="features">Common Topics</p>

        <div id="topcoursescards" class="row">
          <div class="column">
            <Card style={{ width: "20rem", height: "297px", margin: "25px" }}>
              <Card.Img
                id="topcoursepics"
                variant="top"
                src="/images/ai.png"
                alt="logo"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Artificial Intelligence
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div class="column">
            <Card style={{ width: "20rem", height: "297px", margin: "25px" }}>
              <Card.Img
                id="topcoursepics"
                variant="top"
                src="/images/fullstack.png"
                alt="logo"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Full Stack Development
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div class="column">
            <Card style={{ width: "20rem", height: "297px", margin: "25px" }}>
              <Card.Img
                id="topcoursepics"
                variant="top"
                src="/images/IT.png"
                alt="logo"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Information Technology
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div id="topcoursescards" class="row">
          <div class="column">
            <Card style={{ width: "20rem", height: "297px", margin: "25px" }}>
              <Card.Img
                id="topcoursepics"
                variant="top"
                src="/images/cybersecurity.png"
                alt="logo"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Cyber Security
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div class="column">
            <Card style={{ width: "20rem", height: "297px", margin: "25px" }}>
              <Card.Img
                id="topcoursepics"
                variant="top"
                src="/images/datascience.png"
                alt="logo"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Data Science
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div class="column">
            <Card style={{ width: "20rem", height: "297px", margin: "25px" }}>
              <Card.Img
                id="topcoursepics"
                variant="top"
                src="/images/python.png"
                alt="logo"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Python</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Jumbotron>
      <br />
      <br />

      <div id="alignicons">
        <div class="container">
          <div class="row">
            <div class="col-lg">
              <svg
                class="bi bi-people"
                width="11em"
                height="11em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                />
              </svg>
              <h3>Search for Courses</h3>
              <p>
                Easily search and filter through course listings based on
                reviews
              </p>
            </div>
            <div class="col-lg">
              <svg
                class="bi bi-pencil-square"
                width="11em"
                height="11em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              <h3>Write a Review</h3>
              <p>Help others in the FYCourse Community by leaving a review.</p>
            </div>
            <div class="col-lg">
              <svg
                class="bi bi-star"
                width="11em"
                height="11em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                />
              </svg>
              <h3>Rate a Review</h3>
              <p>Read reviews from verified course takers.</p>
            </div>
            <div class="col-lg">
              <svg
                class="bi bi-chat-square-quote"
                width="11em"
                height="11em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path d="M7.468 5.667c0 .92-.776 1.666-1.734 1.666S4 6.587 4 5.667C4 4.747 4.776 4 5.734 4s1.734.746 1.734 1.667z" />
                <path
                  fill-rule="evenodd"
                  d="M6.157 4.936a.438.438 0 0 1-.56.293.413.413 0 0 1-.274-.527c.08-.23.23-.44.477-.546a.891.891 0 0 1 .698.014c.387.16.72.545.923.997.428.948.393 2.377-.942 3.706a.446.446 0 0 1-.612.01.405.405 0 0 1-.011-.59c1.093-1.087 1.058-2.158.77-2.794-.152-.336-.354-.514-.47-.563z"
                />
                <path d="M11.803 5.667c0 .92-.776 1.666-1.734 1.666-.957 0-1.734-.746-1.734-1.666 0-.92.777-1.667 1.734-1.667.958 0 1.734.746 1.734 1.667z" />
                <path
                  fill-rule="evenodd"
                  d="M10.492 4.936a.438.438 0 0 1-.56.293.413.413 0 0 1-.274-.527c.08-.23.23-.44.477-.546a.891.891 0 0 1 .698.014c.387.16.72.545.924.997.428.948.392 2.377-.942 3.706a.446.446 0 0 1-.613.01.405.405 0 0 1-.011-.59c1.093-1.087 1.058-2.158.77-2.794-.152-.336-.354-.514-.469-.563z"
                />
              </svg>
              <h3>Enroll In Courses</h3>
              <p>Easily signup and start taking courses.</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

export default HomePage;
