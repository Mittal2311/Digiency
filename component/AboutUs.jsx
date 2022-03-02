import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Secoundcomp = () => {
  return (
    <>
      <div className="secoundcomp_div">
        <Container>
          <Row>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
              className="secoundcomp_firstdiv"
            >
              <Image src="./images/Image.svg" className="secoundcomp_img" />
            </Col>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
              className="secondcomp_seconddiv "
            >
              <h5 className="secoundcomp_h5 mb-5">About Us</h5>
              <h2 className="secoundcomp_h2 mb-3">
                We Are{" "}
                <span className="secoundcomp_span"> Making Ideas Better </span>{" "}
                For Everyone
              </h2>
              <p className="secoundcomp_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat
                rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue
                praesent. Lorem vulputate orci eget mi, sed pulvinar.
                <br />
                <br /> Ornare etiam erat volutpat tempor fringilla mi. Elit a
                blandit faucibus est, dui interdum ut amet. Adipiscing feugiat
                vel at posuere in. Pellentesque volutpat vestibulum.
              </p>
              <button className="secoundcomp_btn mt-3">Contact Us</button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col
              xl={{ span: 3 }}
              lg={{ span: 3 }}
              md={{ span: 6 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
              className="card_first"
            >
              <Card className="first_card">
                <Card.Body className="firstcard_body">
                  <Image src="./images/icon.png" className="card_img" />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xl={{ span: 3 }}
              lg={{ span: 3 }}
              md={{ span: 6 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
              className="card_secound"
            >
              <Card className="first_card">
                <Card.Body className="firstcard_body">
                  <Image src="./images/icon (1).png" />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xl={{ span: 3 }}
              lg={{ span: 3 }}
              md={{ span: 6 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
              className="card_third"
            >
              <Card className="first_card">
                <Card.Body className="firstcard_body">
                  <Image src="./images/icon (2).png" />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xl={{ span: 3 }}
              lg={{ span: 3 }}
              md={{ span: 6 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
              className="card_fourth"
            >
              <Card className="first_card">
                <Card.Body className="firstcard_body">
                  <Image src="./images/icon (3).png" />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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

export default Secoundcomp;
