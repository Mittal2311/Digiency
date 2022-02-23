import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ThirdComp = () => {
  return (
    <>
      <div className="thirdcomp">
        <Container>
          <Row>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
              className="thirdcopm_firstdiv"
            >
              <h5 className="mb-5">Our Expereince</h5>
              <h2 className="mb-3">
                We Have Completed <span>150+ Projects</span> Succesfully
              </h2>
              <p className="thirdcomp_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat
                rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue
                praesent. Lorem vulputate orci eget mi, sed pulvinar.
                <br />
                <br /> Ornare etiam erat volutpat tempor fringilla mi. Elit a
                blandit faucibus est, dui interdum ut amet. Adipiscing feugiat
                vel at posuere in. Pellentesque volutpat vestibulum.
              </p>
              <button className="thirdcomp_btn mt-3">Contact Us</button>
            </Col>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
              className="thirdcomp_secounddiv"
            >
              <Row>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                  <Card className="thirdcopm_card">
                    <Card.Body className="thirdcomp_cardbody">
                      <h3>250+</h3>
                      <Card.Text className="thirdcomp_cardtext">Global Customer</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                  <Card className="thirdcopm_card">
                    <Card.Body className="thirdcomp_cardbody">
                      <h3>156+</h3>
                      <Card.Text className="thirdcomp_cardtext">Project Completed</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                  <Card className="thirdcopm_card">
                    <Card.Body className="thirdcomp_cardbody">
                      <h3>50+</h3>
                      <Card.Text className="thirdcomp_cardtext">Team Member</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                  <Card className="thirdcopm_card">
                    <Card.Body className="thirdcomp_cardbody">
                      <h3>15+</h3>
                      <Card.Text className="thirdcomp_cardtext">Our Company</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ThirdComp;
