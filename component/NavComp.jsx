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
              <Nav className="me-auto">
                <Nav.Link className="nav-item" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-item" href="#home">
                  About Us
                </Nav.Link>
                <Nav.Link className="nav-item" href="#link">
                  Our Work
                </Nav.Link>
                <Nav.Link className="nav-item" href="#link">
                  Clients
                </Nav.Link>
                <Nav.Link className="nav-item" href="#link">
                  Our Blog
                </Nav.Link>
                <Nav.Link className="nav-item" href="#link">
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
