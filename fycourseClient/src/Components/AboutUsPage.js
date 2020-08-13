import React from "react";
import "./styleaboutus.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
function AboutUsPage() {
  return (
    <div>
      <Navigation></Navigation>

      <Jumbotron style={{ backgroundColor: "DodgerBlue" }}>
        <br />
        <h1 className="whywedothis" style={{ color: "white", fontSize: 100 }}>
          Why We Do This
        </h1>
        <br />
        <p id="aboutparagraph" style={{ color: "white" }}>
          We are a group of developers passionate about self development and
          building platforms to help people develop the skills required to
          succeed in their careers.
        </p>
      </Jumbotron>

      <div>
        <p className="meetteam">Meet The Team</p>
        <br />
        <br />
        <div className="allthere">
        <div id="picturescenter" class="row">
          <div class="column">
            <img  id="roundprofilepic" className="pics" src="/images/ME.jpg" alt="logo" />
          </div>
          <div class="column">
            <img  id="roundprofilepic" className="pics" src="/images/rahmel.jpg" alt="logo" />
          </div>
          <div class="column">
            <img  id="roundprofilepic" className="pics" src="/images/rach.jpg" alt="logo" />
          </div>
        </div>
        <br />
        <br />

        <div class="row">
          <div class="column">
            <p className="descriptionSeife">
              Seife is a second year Computer Science major at the Georgia
              Institute of Technology and is passionate about developing
              software. He aims to create software that helps improve people's
              lives. He has experience working with react, bootstrap, and
              JavaScript. In his free time he enjoys learning new technologies,
              creating fun projects, and playing basketball.
            </p>
          </div>
          <div class="column">
            <p className="descriptionRahmel">
             Rahmel is a third year Mechanical Engineering major at the Georgia Institute
             of Technology and is passionate about entreprenuership and technology. He is
             the Marketing Director of Startup Exchange, the largest entrepreneurship
             organization at Georgia Tech. He wants to help aspiring techies and entrepreneurs
             build their tech skills. In his free time he listens to contemporary R&B music and plays basketball.
            </p>
          </div>
          <div class="column">
            <p className="descriptionRachel">Rachel is a fourth year Computer Science major at Georgia State University.
            She is passionate about all fields of computer science. She aims to continually grow and learn as she begins
            to enter the work force. In her free time she enjoys reading and hiking.</p>
          </div>
        </div>
        </div>
      </div>
      <br />
      <br />
      <Jumbotron style={{ backgroundColor: "orange" }}>
        <h1 className="followus" >
          Follow Us
        </h1>
        <br/>
        <br/>
        <br/>
        <div>
        <p className="shiftlinkedin">
          <a href="https://www.linkedin.com/in/seifeyonas">
            <img className="linkedinSeife" id="linkedin" src="/images/linkedin.png" alt="logo" />
          </a>
          <a href="https://www.linkedin.com/in/rahmel-bailey/">
            <img className="linkedinRahmel" id="linkedin" src="/images/linkedin.png" alt="logo" />
          </a>
          <a href="https://www.linkedin.com/in/rachel-abraham1/">
            <img className="linkedinRachel" id="linkedin" src="/images/linkedin.png" alt="logo" />
          </a>
        </p>
        </div>
        <br/>
        <br/>
        <div className="locationcenter">
        <h1 id="centerlocation" >Location</h1>
        <p id="centermidtown" >Midtown – Atlanta, Georgia</p>
        </div>
      </Jumbotron>
    </div>
  );
}
//
//  
export default AboutUsPage;
