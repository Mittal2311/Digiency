import React, { useState } from "react";
import { Container, Row, Image, Col, Carousel } from "react-bootstrap";
import client from "./Client.json";

const ClientsFeedback = () => {
  const [clientdata] = useState(client);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="compsix">
        <Container>
          <h5>Clients Feedback</h5>
          <h2>
            Some
            <span>
              {" "}
              Great <br /> Words{" "}
            </span>{" "}
            From Our Clients
          </h2>
          <Row className="compsix_row">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item className="carousel_clients ">
                {clientdata.map((i) => (
                  <Col xl={6} lg={6} md={6} className="compsix_firstdiv">
                    <Image src={i.clientimg} className="compsix_img-1" />
                    <div className="compsix_headdiv">
                      <h3>{i.clientname}</h3>
                      <h6>{i.clientceo}</h6>
                      <p>{i.clientinfo}</p>
                    </div>
                  </Col>
                ))}
              </Carousel.Item>
              <Carousel.Item className="carousel_clients">
                {clientdata.map((i) => (
                  <Col xl={6} lg={6} md={6} className="compsix_firstdiv">
                    <Image src={i.clientimg} className="compsix_img-1" />
                    <div className="compsix_headdiv">
                    <h3>{i.clientname}</h3>
                    <h6>{i.clientceo}</h6>
                    <p>{i.clientinfo}</p>
                    </div>
                  </Col>
                ))}
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
        {/* <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </div>
    </>
  );
};

export default ClientsFeedback;
