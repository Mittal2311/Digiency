import React from "react";
import { Container, Col, Row, Card, Image } from "react-bootstrap";

const FourthComp = () => {
  return (
    <>
      <div className="fourthcomp">
        <Container>
          <Row>
            <h5>Team Member</h5>
            <h2>
              We Have <br /> <span>Some Awesome</span> People
            </h2>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <Card className="fourthcomp_card fourthcom_firstDiv">
                <Card.Body className="fourthcomp_body">
                  <Image src="./Image (4).png" className="fourthcom_img" />
                  <Image src="./facebook.png" className="fourthcomp_social-icon"/>
                  <Image src="./instagram.png" className="fourthcomp_social-icon1"/>
                  <Image src="./twitter.png" className="fourthcomp_social-icon2"/>
                  <Image src="./skype.png" className="fourthcomp_social-icon3"/>
                  <h3>Gustavo Herwitz</h3>
                  <Card.Text className="fourthcomp_text">
                    Ul/Ux Designer
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <Card className="fourthcomp_card fourthcom_firstDiv">
                <Card.Body className="fourthcomp_body">
                  <Image src="./Image (3).png" className="fourthcom_img" />
                  <h3>Phillip Curtis</h3>
                  <Card.Text className="fourthcomp_text">
                    Graphic Designer
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <Card className="fourthcomp_card">
                <Card.Body className="fourthcomp_body">
                  <Image src="./Image (2).png" className="fourthcom_img" />
                  <h3>Talan Torff</h3>
                  <Card.Text className="fourthcomp_text">
                    Web Designer
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <Card className="fourthcomp_card fourthcom_fourImg">
                <Card.Body className="fourthcomp_body">
                  <Image src="./Image (1).png" className="fourthcom_img " />
                  <h3>Abram Vaccaro</h3>
                  <Card.Text className="fourthcomp_text">
                    App Developer
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FourthComp;
