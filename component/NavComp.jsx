import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
const NavComp = () => {
  return (
    <>
      <div className="nav_div">
        <Navbar className="nav_div" expand="lg">
          <Container>
            <Image src="./images/LOGO.png" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto  nav-text">
                <Nav.Link className="nav-item" href="Desktop">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-item" href="#">
                  About Us
                </Nav.Link>
                <Nav.Link className="nav-item" href="#">
                  Our Work
                </Nav.Link>
                <Nav.Link className="nav-item" href="#">
                  Clients
                </Nav.Link>
                <Nav.Link className="nav-item" href="#">
                  Our Blog
                </Nav.Link>
                <Nav.Link className="nav-item" href="#">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Image src="./images/Mask.png" className="nav_last_logo" />
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavComp;
