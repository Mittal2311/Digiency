import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Style from "../../styles/blog2design/navbar.module.css";
const Navcom = () => {
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container className={Style.Navbar2_container}>
            <Image src="./Blog-img/Digiency.svg" />
            <Image src="./Blog-img/Dark.svg" className={Style.pic2} />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={Style.Navbar2_navlink1}>
                <Nav.Link href="#home" className={Style.Navbar2_navlink}>
                  Home
                </Nav.Link>
                <Nav.Link href="#features" className={Style.Navbar2_navlink}>
                  About Us
                </Nav.Link>
                <Nav.Link href="#pricing" className={Style.Navbar2_navlink}>
                  Our Work
                </Nav.Link>
                <Nav.Link href="#home" className={Style.Navbar2_navlink}>
                  Clients
                </Nav.Link>
                <Nav.Link href="#home" className={Style.Navbar2_navlink}>
                  Our Blog
                </Nav.Link>
                <Nav.Link href="#home" className={Style.Navbar2_navlink}>
                  Contact Us{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Image src="./Blog-img/Dark.svg" className={Style.pic} />
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Navcom;
