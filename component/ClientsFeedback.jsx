import React, { useState, useRef } from "react";
import { Container, Row, Carousel, Col, Image } from "react-bootstrap";
import client from "../Json/Client.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientsFeedback = () => {
  const craslRef = useRef(null);
  const [clientdata] = useState(client);
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
          slidesToShow: 1.9,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.11,
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
          <Slider {...settings}>
            {/* <Carousel
              ref={craslRef}
              activeIndex={index}
              onSelect={handleSelect}
            > */}
              {clientdata.map((item, indexKey) => {
                return (
                  <Col xl={12} lg={12} md={12} className="compsix_firstdiv">
                    <Image src={item.clientimg} className="compsix_img-1" />
                    <div className="compsix_headdiv">
                      <h3>{item.clientname}</h3>
                      <h6>{item.clientceo}</h6>
                      <p>{item.clientinfo}</p>
                    </div>
                  </Col>
                );
                {
                  /* if (
                  craslRef.current && craslRef.current.element.clientWidth < 950
                    ? true
                    : false
                ) {
                  return (
                    <Carousel.Item className="carousel_clients ">
                      <Col xl={12} lg={12} md={12} className="compsix_firstdiv">
                        <Image src={item.clientimg} className="compsix_img-1" />
                        <div className="compsix_headdiv">
                          <h3>{item.clientname}</h3>
                          <h6>{item.clientceo}</h6>
                          <p>{item.clientinfo}</p>
                        </div>
                      </Col>
                    </Carousel.Item>
                  );
                } else {
                  if (indexKey % 2 == 0) {
                    return (
                      <Carousel.Item className="carousel_clients ">
                        <Col xl={6} lg={6} md={12} className="compsix_firstdiv">
                          <Image
                            src={item.clientimg}
                            className="compsix_img-1"
                          />
                          <div className="compsix_headdiv">
                            <h3>{item.clientname}</h3>
                            <h6>{item.clientceo}</h6>
                            <p>{item.clientinfo}</p>
                          </div>
                        </Col>
                        {indexKey + 2 <= clientdata.length ? (
                          <Col
                            xl={6}
                            lg={6}
                            md={12}
                            className="compsix_firstdiv"
                          >
                            <Image
                              src={clientdata[indexKey + 1].clientimg}
                              className="compsix_img-1"
                            />
                            <div className="compsix_headdiv">
                              <h3>{clientdata[indexKey + 1].clientname}</h3>
                              <h6>{clientdata[indexKey + 1].clientceo}</h6>
                              <p>{clientdata[indexKey + 1].clientinfo}</p>
                            </div>
                          </Col>
                        ) : (
                          <div></div>
                        )}
                      </Carousel.Item>
                    );
                  }
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

export default ClientsFeedback;
