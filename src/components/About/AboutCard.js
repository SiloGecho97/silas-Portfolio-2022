import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",marginTop:"4rem" }}>
            I am <span className="purple">Silas Getachew </span>
            Software Developer based on  <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br/>
            <br />Working seamlessly between frontend applications, backend services. Skilled in Javascript, Typescript, Full-Stack Development(MEVN, MERN), Strong education professional with a Bachelor's degree focused in Software Engineering from Addis Ababa Institute of Technology.

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
