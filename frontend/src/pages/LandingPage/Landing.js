import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="landing__Heading">
            <h1>Welcome to Note Zipper</h1>
            <p className="subtitle">Safe place for all your notes</p>
            <div className="btngrp">
              <a href="/login">
                <Button className="landingbtn">Login</Button>
              </a>
              <a href="/signup">
                <Button className="landingbtn" variant="outline-primary">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
