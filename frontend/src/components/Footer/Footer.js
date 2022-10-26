import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        color: "black",
        bottom: 0,
      }}
    >
      Copyright &copy; Notes Zipper
    </footer>
  );
};

export default Footer;
