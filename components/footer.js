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
      <div className="footer_div">
        <Container className="footer">
          <Row className="mb-4">
            {/* section-1 */}
            <Col xl={3} md={6} className="digiency mb-4">
              <img
                className="mt-3"
                src="/Digiency1.png"
                alt="Digiency"
                width={162}
                height={48}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                laoreet libero dis eget maecenas bibendum.
              </p>

              <div className="digiency_icons d-flex">
                <Nav.Link href="#facebook">
                  <img src="/fb1.png" alt="facebook" />
                </Nav.Link>
                <Nav.Link className="nav-link" href="#instagram">
                  <img src="/insta.png" alt="instagram" />
                </Nav.Link>
                <Nav.Link className="nav-link" href="#tweet">
                  <img src="/tweet.png" alt="twitter" />
                </Nav.Link>
                <Nav.Link className="nav-link" href="skype">
                  <img src="/sky.png" alt="skype" />
                </Nav.Link>
              </div>
            </Col>

            {/* section-2 */}
            <Col xl={3} md={6} sm={6} className="company mb-4">
              <p>Company</p>
              <div className="nav-link">
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#work">Our Work</Nav.Link>
                <Nav.Link href="#clients">Clients</Nav.Link>
                <Nav.Link href="#blog">Our Blog</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
              </div>
            </Col>

            {/* section-3 */}
            <Col xl={3} md={6} sm={6} className="services mb-4">
              <p>Services</p>
              <div className="nav-link">
                <Nav.Link href="#contact">Graphic Design</Nav.Link>
                <Nav.Link href="#contact">UI/UX Design</Nav.Link>
                <Nav.Link href="#contact">Web Development</Nav.Link>
                <Nav.Link href="#contact">App Development</Nav.Link>
                <Nav.Link href="#contact">Web Hosting</Nav.Link>
              </div>
            </Col>

            {/* section-4 */}
            <Col xl={3} md={6} className="newsletter mb-4">
              <p className="mb-2">Newsletter</p>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget varius viverra in.
              </p>

              <div>
                <InputGroup className="inputbox mb-3">
                  <FormControl
                    className="form-control"
                    placeholder="info@gmail.com"
                  />
                  <InputGroup.Text className="inputgroup-text">
                    <img src="/img1.png" alt="send" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="container-fluid">
          <Container>
            <Row>
              <view className="d-flex">
                <Col className="copyright">
                  <p className="mt-2">
                    <img src="/c.png" alt="copyright" /> {"  "}Copyright 2021.
                    All Right Reserved By Ojjomedia
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
