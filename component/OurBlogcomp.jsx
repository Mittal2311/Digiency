import React, { useState } from "react";
import { Container, Row, Carousel, Col, Image } from "react-bootstrap";
import blogdata from "../Json/OurBLog.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const OurBlogcomp = () => {
  const [data] = useState(blogdata);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
            <Slider {...settings}>
              {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
              {data.map((i, k) => {
                return (
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    className="ourblogcomp_firstcomp mb-3"
                  >
                    <div className="ourblogcomp_firstdiv">
                      <h6 className="first_h6">{i.grafdesign}</h6>
                      <h4 className="firstdiv_h4">{i.headig1}</h4>
                      <Image src={i.img1} className="firstdiv_img" />
                      <div className="firstdiv_secoundcomp">
                        <Image src={i.img2} className="secoundiv1_img1" />
                        <div className="wahh">
                          <h4 className="secound_h6">{i.heading2}</h4>
                          <h7 className="first_h7">{i.pera}</h7>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
                {
                  /* if (k % 2 == 0) {
                  return (
                    <Carousel.Item className="carousel_clients ">
                      <Col
                        xl={6}
                        lg={6}
                        md={6}
                        className="ourblogcomp_firstcomp mb-3"
                      >
                        <div className="ourblogcomp_firstdiv">
                          <h6 className="first_h6">{i.grafdesign}</h6>
                          <h4 className="firstdiv_h4">{i.headig1}</h4>
                          <Image src={i.img1} className="firstdiv_img" />
                          <div className="firstdiv_secoundcomp">
                            <Image src={i.img2} className="secoundiv1_img1" />
                            <div className="wahh">
                              <h4 className="secound_h6">{i.heading2}</h4>
                              <h7 className="first_h7">{i.pera}</h7>
                            </div>
                          </div>
                        </div>
                      </Col>

                      {k + 2 <= data.length ? (
                        <Col
                          xl={6}
                          lg={6}
                          md={6}
                          className="ourblogcomp_firstcomp"
                        >
                          <div className="ourblogcomp_firstdiv">
                            <h6 className="first_h6">
                              {data[k + 1].grafdesign}
                            </h6>
                            <h4 className="firstdiv_h4">
                              {data[k + 1].headig1}
                            </h4>
                            <Image
                              src={data[k + 1].img1}
                              className="firstdiv_img"
                            />
                            <div className="firstdiv_secoundcomp">
                              <Image
                                src={data[k + 1].img2}
                                className="secoundiv1_img1"
                              />
                              <div className="wahh">
                                <h4 className="secound_h6">
                                  {data[k + 1].heading2}
                                </h4>
                                <h7 className="first_h7">{data[k + 1].pera}</h7>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ) : (
                        <div></div>
                      )}
                    </Carousel.Item>
                  );
                } */
                }
              })}
              {/* </Carousel> */}
            </Slider>
          </Row>
        </Container>
      </div>
    </>
  );
};
