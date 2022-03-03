import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Button,
  NavLink,
  Image,
} from "react-bootstrap";
import style from "../styles/Nav.module.css";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className={style.nav}>
        <Container>
          <Image src="./Desktop-images/Digiency.svg" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className={style.Collapse} id="navbarScroll">
            <Nav id={style.Nav} className="my-2 my-lg-0" navbarScroll>
              <NavLink href="#action1" className={style.navlink}>
                Home
              </NavLink>
              <NavLink href="#action2" className={style.navlink}>
                About
              </NavLink>
              <NavLink href="#action2" className={style.navlink}>
                Services
              </NavLink>
              <NavLink href="#action2" className={style.navlink}>
                Portfolio
              </NavLink>
              <NavLink href="#action2" className={style.navlink}>
                Blog
              </NavLink>
              <NavLink href="#action2" className={style.navlink}>
                Contact Us
              </NavLink>

              <Button className={style.button}>Let’s Talk</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
