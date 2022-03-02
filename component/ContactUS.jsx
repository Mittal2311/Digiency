import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import ContactUsjson from "../Json/ContactUs.json";

const ContactUs = () => {
  const [contactUsdata] = useState(ContactUsjson);
  return (
    <>
      <div className="contactus_div">
        <Container>
          <h5>Contact Us</h5>
          <h2>
            Feel{" "}
            <span>
              Free <br />
              to Contact
            </span>{" "}
            With Us
          </h2>
          <Row className="contactus_div-row">
            {contactUsdata.map((i, k) => (
              <Col
                xl={4}
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="contactus_div2"
              >
                <Card className="contactus_div2-card">
                  <Card.Body className="contactus_div2-card-body">
                    <Image src={i.cardimg} className="contactus_div2-img" />
                    <div className="contactus_div2-title-div">
                      <Card.Title className="contactus_div2-title">
                        {i.cardtitle}
                      </Card.Title>
                      <Card.Subtitle className="contactus_div2-subtitle">
                        {i.cardsubtitle}
                      </Card.Subtitle>
                    </div>
                    <div className="contactus_div2-text-div">
                      <Card.Text
                        className="contactus_div2-text1"
                        // style={
                        //   k == 1 ? { color: "#FF5300" } : { color: "#ffffff" }
                        // }
                      >
                        {i.cardtext}
                        {k == 1 && (
                          <span style={{ color: "#FF5300" }}> (Toll free)</span>
                        )}
                      </Card.Text>
                      <Card.Text className="contactus_div2-text2">
                        {i.cardtext2}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row>
            <Col
              xl={6}
              lg={6}
              md={{ span: 12, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
            >
              <Image src="./images/Image (13).png" className="fromdiv-1 mt-5" />
            </Col>
            <Col
              xl={6}
              lg={6}
              md={{ span: 12, order: 2 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
            >
              {" "}
              <h3 className="text-white mt-5">
                Send Your <span>Massage To Us </span>
              </h3>
              <Form className="fromdiv-2">
                <Row className="mb-5">
                  <Form.Group as={Col} className="contactus_div-from">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Control type="email" placeholder="email" />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Subject"
                        className="contactus_div-from-width"
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="contactus_div-from-width-mobile"
                    >
                      <Form.Control
                        type="number"
                        placeholder="Mobile No"
                        className="contactus_div-from-width-mobile1"
                      />
                    </Form.Group>
                  </Row>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Send Massage"
                    rows={3}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container>
          <Image src="./images/Map.png" className="container_3-img" />
        </Container>
        <Container className="d-flex justify-content-around w-100">
          <Image src="./images/Group.svg" className="contactus_last-img" />
          <Image src="./images/Group (1).svg" className="contactus_last-img" />
          <Image src="./images/Group (2).svg" className="contactus_last-img" />
          <Image src="./images/Group (3).svg" className="contactus_last-img" />
        </Container>
      </div>
    </>
  );
};

export default ContactUs;
