/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Navbar, Container,Row,NavbarBrand,  Nav,Button
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
const Header = () => {
  return (
    <>
      <Container>
        <Row>
          <Navbar expand="lg">
            <NavbarBrand>
              <img src="/Digiency.png"></img>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse >
              <Nav className="hamburger" expand="lg">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#work">Services</Nav.Link>
                <Nav.Link href="#clients">Portfolio</Nav.Link>
                <Nav.Link>Blog</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <Button variant="secondary" size="xs">
                  Let's talk
                </Button>
              </Nav>
            </NavbarCollapse>
          </Navbar>
        </Row>
      </Container>
    </>
  );
};
export default Header;
