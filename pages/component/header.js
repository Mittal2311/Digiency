import { Navbar, NavbarBrand, Container, Nav, Row, col } from "react-bootstrap";
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
            <NavbarBrand className="img">
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
              md={{ order: "second"}}
              className="mask"
              style={{textAlign:"end"}}
              
            >
              <NavbarBrand>
                <Image
                  className="msk1"
                  src="/mask.png"
                  alt="logo"
                  height={22}
                  width={22}

                  
                ></Image>
              </NavbarBrand>
            </Col>

            <NavbarToggle
              className="menu"
              style={{ background: "black", color: "white" }}
            />

            <NavbarCollapse style={{ color: "black" }}>
              <Nav style={{ marginLeft: "90px" }}>
                <Nav.Link
                  href=""
                  style={{
                    color: "black",
                    fontSize: "18px",
                    marginLeft: "18px",
                    textAlign: "right",
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href=""
                  style={{
                    color: "black",
                    fontSize: "18px",
                    marginLeft: "18px",
                    textAlign: "right",
                  }}
                >
                  About us
                </Nav.Link>
                <Nav.Link
                  href=""
                  style={{
                    color: "black",
                    fontSize: "18px",
                    marginLeft: "18px",
                    textAlign: "right",
                  }}
                >
                  Our Work
                </Nav.Link>
                <Nav.Link
                  href=""
                  style={{
                    color: "black",
                    fontSize: "18px",
                    marginLeft: "18px",
                    textAlign: "right",
                  }}
                >
                  Clients
                </Nav.Link>
                <Nav.Link
                  href=""
                  style={{
                    color: "black",
                    fontSize: "18px",
                    marginLeft: "18px",
                    textAlign: "right",
                  }}
                >
                  Our Blog
                </Nav.Link>
                <Nav.Link
                  href=""
                  style={{
                    color: "black",
                    fontSize: "18px",
                    marginLeft: "18px",
                    textAlign: "right",
                  }}
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>
        </Row>
      </Container>

      {/* banner page */}
      <Container fluid className="cont-3 mt-2">
        <Row className="cont3">
          <Col xl={12} lg={12} sm={12} xs={12} className="cont3">
            <h1 className="landing">
              35 Stellar Graphic Design Blogs <br></br>
              <span className="span-para">
                To Keep You Educated And Inspired
              </span>
            </h1>
            <Col xl={12} lg={12} sm={12} xs={12}>
              <p className="para">Home - Blog Page - Graphic Design</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
