import React from "react";
import "./stylecoursepage.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStarO } from "@fortawesome/free-solid-svg-icons";
import Navigation from './Navigation';
function CoursePage() {
  return (
    <div>
      <Navigation></Navigation>
      <Jumbotron style={{ backgroundColor: "#202020", height: 580 }}>
        <div class="row">
          <div id="pushairight" class="column">
            <img className="ai-robot" src="/images/ai-robot.jpg" alt="Robot" />
            <br />
            <br />
            <br />
            <h2 id="coursetitle">
              Artificial Intelligence A-Z™: Learn How To Build An AI.
            </h2>
            <div className="starrsize">
              <span className="checked">4.7 </span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span className="checked"> (17)</span>
            </div>
            <p id="coursetitle" style={{ fontSize: 23 }}>
              Udemy
            </p>
          </div>

          <div id="pushcardright" class="column">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Artificial Intelligence A-Z™</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Online Course</ListGroupItem>
                  <ListGroupItem>30-Day Money-Back Guarantee</ListGroupItem>
                  <ListGroupItem>16.5 hours on-demand video</ListGroupItem>
                  <ListGroupItem>Full lifetime access</ListGroupItem>
                  <ListGroupItem>Self Paced</ListGroupItem>
                  <ListGroupItem>$10.99</ListGroupItem>
                  <Button
                    variant="primary"
                    href="https://www.udemy.com/course/artificial-intelligence-az/"
                  >
                    Go To Course
                  </Button>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Jumbotron>
      <div class="row" id="coursedetails">
        <div class="col-md-8">
          <div>
            <h3 style={{ fontSize: 40 }}>About the Course</h3>
            <br />
            <div id="aboutparadiv">
              <p style={{ fontSize: 20 }}>
                Combine the power of Data Science, Machine Learning and Deep
                Learning to create powerful AI for Real-World applications!
              </p>
            </div>
          </div>

          <div class="row">
            <div>
              <h3 id="pushprofessorright">Professor:</h3>
            </div>
            <div>
              <p id="pushprofessorright" style={{ fontSize: 24 }}>
                Hadelin de Ponteves
              </p>
            </div>
          </div>
          <hr></hr>
          <h3 style={{ fontSize: 40 }}>Included in Course</h3>
          <br />
          <div id="pushincludedright" class="row">
            <div class="column">
              <p style={{ fontSize: 20 }}>Certificate of completion</p>
            </div>

            <div class="column">
              <p style={{ fontSize: 20, paddingLeft: 63 }} id="includedpad">
                Projects
              </p>
            </div>
          </div>

          <div id="pushincludedright" class="row">
            <div class="column">
              <p style={{ fontSize: 20 }}>Online Community Access</p>
            </div>
            <div class="column">
              <p style={{ fontSize: 20, paddingLeft: 50 }}>17 articles</p>
            </div>
          </div>
          <hr></hr>

          <div class="row">
            <h3 style={{ fontSize: 40, paddingLeft: 28 }}>Top Reviews</h3>
            <div id="writereviewdiv">
              <br />
              <br />
              <button id="writereviewbutton" type="button">
                Write A Review
              </button>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div>
                <img
                  id="roundprofilepic"
                  src="/images/profilepic.png"
                  width="140"
                  height="120"
                ></img>
              </div>

              <div id="userdescript">
                <div class="row">
                  <div id="coursetakername">Gregory S.</div>
                  <div id="verifiedtaker">
                    <button id="coursetakerbut" type="button">
                      Verified Course Taker ✔
                    </button>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div id="jobdescrip">
                    1 Year Software Developer at Mid-Size Company
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="column">
                <p style={{ paddingLeft: 175 }}>March 3,2020</p>
                <div style={{ paddingLeft: 170 }}>
                  <span id="starsize" class="fa fa-star checked"></span>
                  <span id="starsize" class="fa fa-star checked"></span>
                  <span id="starsize" class="fa fa-star checked"></span>
                  <span id="starsize" class="fa fa-star checked"></span>
                  <span id="starsize" class="fa fa-star checked"></span>
                </div>
                <div class="column">
                  <br />
                  <p>
                    <p style={{ paddingLeft: 170 }}>
                      "Great for beginners, clear explanations"
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div class="goodsection">
              <h4 id="reviewsectitle">The Good</h4>
              <h6 id="reviewsecbody">
                Well developed course that taught the fundamentals of AI at
                begineer level and slowly progressed. Professor made material
                clear and projects made me very comfortable in AI.
              </h6>
            </div>

            <br></br>
            <br></br>

            <div class="badsection">
              <div>
                <h4 id="reviewsectitle">The Bad</h4>
              </div>
              <div>
                <h6>
                  Not clear how to install coding software for projects. But
                  great overall!
                </h6>
              </div>
            </div>
            <br></br>
            <br></br>

            <div class="overallsection">
              <div>
                <h4 id="reviewsectitle">Overall</h4>
              </div>
              <div>
                <h6>
                  Not clear how to install coding software for projects. But
                  great overall!
                </h6>
              </div>
            </div>
          </div>
          <hr></hr>
          <div class="container">
            <div class="row">
              <div>
                <img
                  id="roundprofilepic"
                  src="/images/julie.png"
                  width="140"
                  height="120"
                ></img>
              </div>

              <div id="userdescript">
                <div class="row">
                  <div id="coursetakername">Julie P.</div>
                  <div id="verifiedtaker">
                    <button id="coursetakerbut" type="button">
                    Verified Course Taker ✔
                    </button>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div id="jobdescrip">
                    3 month IT Technician at Small-Size Company
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="column">
                <p style={{ paddingLeft: 175 }}>February 20,2020</p>
                <div style={{ paddingLeft: 170 }}>
                  <span id="starsize" class="fa fa-star checked"></span>
                  <span id="starsize" class="fa fa-star checked"></span>
                  <span id="starsize" class="fa fa-star checked"></span>
                  <span id="starsize" class="fa fa-star checked"></span>
                </div>
                <div class="column">
                  <br />
                  <p style={{ paddingLeft: 170 }}>
                    "Excellent, clear easy to understand"
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div class="goodsection">
              <h4 id="reviewsectitle">The Good</h4>
              <h6 id="reviewsecbody">
                Very gifted teacher that explains advanced concepts with minimal
                discourse. I'm able to learn a lot and fast.
              </h6>
            </div>

            <br></br>
            <br></br>

            <div class="badsection">
              <div>
                <h4 id="reviewsectitle">The Bad</h4>
              </div>
              <div>
                <h6 id="reviewsecbody">
                  Not clear how to install coding software for projects. But
                  great overall!
                </h6>
              </div>
            </div>
            <br></br>
            <br></br>

            <div class="overallsection">
              <div>
                <h4 id="reviewsectitle">Overall</h4>
              </div>
              <div>
                <h6 id="reviewsecbody">
                  Great course for beginners/intermediate programmers. Eaasy to
                  understand. Highly recommend.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
