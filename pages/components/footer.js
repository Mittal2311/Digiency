import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="main_div" style={{ background: "#373737" }}>
        <Container className="cont_1">
          <Row className="mb-4">
            {/* sec-1 */}
            <Col className="c1 mb-4" xl={3} md={6} style={{ color: "white" }}>
              <img
                className="mt-3"
                src="/Digiency1.png"
                alt="logo"
                width={162}
                height={48}
              />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  marginTop: "30px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                laoreet libero dis eget maecenas bibendum.
              </p>
              <div className="img_icon d-flex" style={{ marginTop: "30px" }}>
                <Nav.Link className="nav-link" href="#facebook">
                  <img src="/fb1.png" alt="fb" />
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  href="#instagram"
                  style={{ marginLeft: "15px" }}
                >
                  <img src="/insta.png" alt="insta" />
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  href="#tweet"
                  style={{ marginLeft: "15px" }}
                >
                  <img src="/tweet.png" alt="tweet" />
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  href="skype"
                  style={{ marginLeft: "15px" }}
                >
                  <img src="/sky.png" alt="skype" />
                </Nav.Link>
              </div>
            </Col>

            {/* sec-2 */}
            <Col
              className="c2 mb-4 col_2"
              xl={3}
              md={6}
              sm={6}
              style={{ color: "white" }}
            >
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "600",
                }}
              >
                Company
              </p>
              <div
                style={{
                  marginTop: "30px",
                  fontSize: "16px",
                  fontWeight: "400",
                  marginLeft: "-15px",
                }}
              >
                <Nav.Link
                  href="#about"
                  style={{
                    color: "white",
                  }}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="#work"
                  style={{
                    color: "white",
                  }}
                >
                  Our Work
                </Nav.Link>
                <Nav.Link
                  href="#clients"
                  style={{
                    color: "white",
                  }}
                >
                  Clients
                </Nav.Link>
                <Nav.Link
                  href="#blog"
                  style={{
                    color: "white",
                  }}
                >
                  Our Blog
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  style={{
                    color: "white",
                  }}
                >
                  Contact Us
                </Nav.Link>
              </div>
            </Col>

            {/* sec-3 */}
            <Col
              className="c3 mb-4 col_3"
              xl={3}
              md={6}
              sm={6}
              style={{ color: "white" }}
            >
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "600",
                }}
              >
                Services
              </p>
              <div
                style={{
                  marginTop: "30px",
                  fontSize: "16px",
                  fontWeight: "400",
                  marginLeft: "-15px",
                }}
              >
                <Nav.Link
                  href="#contact"
                  style={{
                    color: "white",
                  }}
                >
                  Graphic Design
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  style={{
                    color: "white",
                  }}
                >
                  UI/UX Design
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  style={{
                    color: "white",
                  }}
                >
                  Web Development
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  style={{
                    color: "white",
                  }}
                >
                  App Development
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  style={{
                    color: "white",
                  }}
                >
                  Web Hosting
                </Nav.Link>
              </div>
            </Col>

            {/* sec-4 */}
            <Col
              className="c4 mb-4 col_4"
              xl={3}
              md={6}
              style={{ color: "white" }}
            >
              <p
                className="mb-2"
                style={{
                  fontSize: "40px",
                  fontWeight: "600",
                }}
              >
                Newsletter
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  marginTop: "30px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget varius viverra in.
              </p>
              <div>
                <InputGroup
                  className="mb-3"
                  style={{
                    marginTop: "40px",
                    border: "1px solid #FF5300",
                    // width: "300px",
                    height: "60px",
                  }}
                >
                  <FormControl
                    placeholder="info@gmail.com"
                    style={{ background: "#373737" }}
                    // aria-label="Recipient's username"
                    // aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text style={{ background: "#FF5300" }}>
                    <img src="/img1.png" alt="logo1" width={40} height={25} />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="container-fluid" style={{ background: "#FF5300" }}>
          <Container>
            <Row>
              <view className="d-flex">
                <Col className="copyright">
                  <p
                    className="mt-2"
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "400",
                    }}
                  >
                    <img src="/c.png" alt="c" /> {""}Copyright 2021. All Right
                    Reserved By Ojjomedia
                  </p>
                </Col>

                <Col className="arrow text-end mt-2">
                  <img src="/arrow.png" alt="arrow" width={33} height={33} />
                </Col>
              </view>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
