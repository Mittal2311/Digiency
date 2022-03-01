import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  Row,
  col,
  NavLink,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Col from "react-bootstrap/Col";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <Navbar
            // bg="success"
            variant="dark"
            sticky="top"
            expand="lg"
          >
            <NavbarBrand className="digiency-img">
              <Image
                src="/Digiency.png"
                alt="logo"
                height={30}
                width={150}
              ></Image>
            </NavbarBrand>

            <Col
              xl={{ order: "last" }}
              lg={{ order: "last" }}
              md={{ order: "second" }}
              className="dark"
              style={{ textAlign: "end" }}
            >
              <NavbarBrand>
                <Image
                  className="dark1"
                  src="/mask.png"
                  alt="logo"
                  height={22}
                  width={22}
                ></Image>
              </NavbarBrand>
            </Col>

            <NavbarToggle id="navbartoggle" />

            <NavbarCollapse id="navcollapse">
              <Nav>
                <NavLink href="" className="nav-link">Home</NavLink>
                <NavLink href="" className="nav-link">About us</NavLink>
                <NavLink href="" className="nav-link">Our Work</NavLink>
                <NavLink href="" className="nav-link">Clients</NavLink>
                <NavLink href="" className="nav-link">Our Blog</NavLink>
                <NavLink href="" className="nav-link">Contact Us</NavLink>
              </Nav>
            </NavbarCollapse>
          </Navbar>
        </Row>
      </Container>

      {/* banner page */}
      <Container fluid className="banner mt-2">
        <Row>
          <Col xl={12} lg={12} sm={12} xs={12}>
            <h1 className="landing">
              35 Stellar Graphic Design Blogs <br></br>
              To Keep You Educated And Inspired
              
            </h1>
            <Col xl={12} lg={12} sm={12} xs={12}>
              <p className="title">Home - Blog Page - Graphic Design</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
