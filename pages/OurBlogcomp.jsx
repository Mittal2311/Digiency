import React, { useState } from "react";
import { Container, Row, Image, Col, Carousel } from "react-bootstrap";
import blogdata from "./OurBLog.json";

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
              <Col xl={6} lg={6} md={6} className="ourblogcomp_firstcomp">
                <div className="ourblogcomp_firstdiv">
                  <h6 className="first_h6">{i.grafdesign}</h6>
                  <h4 className="firstdiv_h4">{i.headig1}</h4>
                  <Image src={i.img1} className="firstdiv_img" />

                  <div className="firstdiv_secoundcomp">
                    <Image src={i.img2} className="secoundiv1_img1" />
                    <div className="wahh">
                      <h4 className="secound_h6">{i.heading2}</h4>
                      <h7 className="first_h7">{i.pera}</h7>
                      <h7 className="secound_h7"></h7>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            </Carousel.Item>
            <Carousel.Item className="carousel_clients">
            {data.map((i) => (
              <Col xl={6} lg={6} md={6} className="ourblogcomp_firstcomp">
                <div className="ourblogcomp_firstdiv">
                  <h6 className="first_h6">{i.grafdesign}</h6>
                  <h4 className="firstdiv_h4">{i.headig1}</h4>
                  <Image src={i.img1} className="firstdiv_img" />

                  <div className="firstdiv_secoundcomp">
                    <Image src={i.img2} className="secoundiv1_img1" />
                    <div className="wahh">
                      <h4 className="secound_h6">{i.heading2}</h4>
                      <h7 className="first_h7">{i.pera}</h7>
                      <h7 className="secound_h7"></h7>
                    </div>
                  </div>
                </div>
              </Col>
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
