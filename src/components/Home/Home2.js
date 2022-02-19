import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/freelancer.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={5} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={1} className="myAvtar">
            
          </Col>
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", fontWeight:"bold" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a software engineer based in Addis Ababa, 
              Bsc in Software Engineering from Addis Ababa Institute of Technology.
              I make full stack web application
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, TypeScript, NodeJS, React, Vue Ruby on Rails. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Development </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
             
            </p>
          </Col>
         
        </Row>
        <Row style={{ marginTop:'8rem'}}>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/silogecho97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Silogecho"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/silas-getachew-56287310b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/silas_mrds/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
