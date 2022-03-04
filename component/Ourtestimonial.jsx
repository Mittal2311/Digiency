import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Style from "../styles/Ourtestimonial.module.css";
import Ourtestimonialjson from "../Json/Ourtestimonial.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Ourtestimonial = () => {
  const [data] = useState(Ourtestimonialjson);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
      <div className={Style.Ourtestimonial}>
        <h6 className={Style.Ourtestimonial_h6}>Our Testimonial</h6>
        <h1 className={Style.Ourtestimonial_h1}>What Our Client Saying</h1>
        <Container>
          <Row className={Style.Ourtestimonial_row}>
            <Slider {...settings}>
              {data.map((i) => {
                return (
                  <Col
                    xl={4}
                    lg={4}
                    md={4}
                    className={Style.Ourtestimonial_col}
                  >
                    <div className={Style.Ourtestimonial_cardmain_div}>
                      <div className="Ourtestimonial_cardfirst_div">
                        <Image src={i.img} className={Style.Ourtestimonial_cardmain_div_img} />
                        <p className={Style.Ourtestimonial_cardmain_div_p}>{i.p}</p>
                      </div>
                      <div className={Style.Ourtestimonial_cardsecound_div}>
                        <Image src={i.img1} />
                        <div
                          className={
                            Style.Ourtestimonial_cardsecound_div_heading
                          }
                        >
                          <h5 className={Style.Ourtestimonial_cardsecound_div_heading_h5}>{i.h5}</h5>
                          <h7 className={Style.Ourtestimonial_cardsecound_div_heading_h7}>{i.h7}</h7>
                        </div>
                        <Image src={i.img2} className={Style.Ourtestimonial_cardsecound_heading_img}/>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Slider>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Ourtestimonial;
