import React, { useState } from "react";
import { Container, Row, Image, Col, Carousel } from "react-bootstrap";
import blogdata from "./OurBLog.json";
import Ourblogcardcomp from "./Ourblogcardcomp";

const OurBlogcomp = () => {
  const [data] = useState(blogdata);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="ourblogcomp">
        <Container>
          <h5>Our Blog</h5>
          <h2>
            Our Latest{" "}
            <span>
              Blog
              <br />
              Will Keep
            </span>{" "}
            Everyone Updated
          </h2>
          <Row className="ourblog_row">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item className="carousel_clients">
                {data.map((i) => (
                  <Ourblogcardcomp data1={i} />
                ))}
              </Carousel.Item>
              <Carousel.Item className="carousel_clients">
                {data.map((i) => (
                  <Ourblogcardcomp data1={i} />
                ))}
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurBlogcomp;
