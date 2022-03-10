import React, { useState } from "react";
import { Container, Row, Image, Col, Card } from "react-bootstrap";
import datajson from "../Json/Temmember.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Teammember = () => {
  const [mainData] = useState(datajson);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className="fourthcomp">
      <Container>
        <h5>Team Member</h5>
        <h2>
          We Have <br /> <span>Some Awesome</span> People
        </h2>
        <Row>
          <Slider {...settings}>
            {mainData.map((i) => {
              return (
                <Col xl={3} lg={3} md={6} sm={6} xs={12}>
                  <Card className="fourthcomp_card fourthcom_firstDiv">
                    <Card.Body className="fourthcomp_body">
                      <Image src={i.img} className="fourthcom_img" />
                      <Image src={i.img2} className="fourthcomp_social-icon" />
                      <Image src={i.img3} className="fourthcomp_social-icon1" />
                      <Image src={i.img4} className="fourthcomp_social-icon2" />
                      <Image src={i.img5} className="fourthcomp_social-icon3" />
                      <h3>{i.cardheading}</h3>
                      <Card.Text className="fourthcomp_text">
                        {i.cardtext}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Slider>
        </Row>
      </Container>
    </div>
  );
};
