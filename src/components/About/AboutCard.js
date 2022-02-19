import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Silas Getachew </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />Software Engineer for Addis Ababa Institute Technologies
            <br />
            <br />
          </p>


          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Silas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
