import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Aboutus = () => {
  return (
    <>
      <div className="about_section">
        <Container>
          <Row>
            <Col xl={6} lg={6}>
              <Image src="/about.png" />
            </Col>
            <Col xl={6} lg={6} className="about_cont">
              <h5>About Us</h5>
              <h4>We Are <span> Making Ideas Better</span> For Everyone</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat
                rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue
                praesent. Lorem vulputate orci eget mi, sed pulvinar.
              </p>
              <p>
                Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
                faucibus est, dui interdum ut amet. Adipiscing feugiat vel at
                posuere in. Pellentesque volutpat vestibulum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Aboutus;
