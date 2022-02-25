import React, { useState } from "react";
import { Container, Row, Col, Image, NavLink } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Teamjson from "../json/team.json";

const Team = (props) => {
  // const { teamimg,teamheading,teamtitle } = props.data;
  const [teamData] = useState(Teamjson);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: 100,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      }
    ]
  };

  return (
    <>
      {/* {teamData.map((i) => console.log("iiii", i))} */}

      {/* <Col xl={3} lg={3} className="team">
        {teamData.map((item) => (
          <div className="slider_cont">
            <>
              <Image src={item.teamimg} />
              <div className="team_cont">
                <h2>{item.teamheading}</h2>
                <span>{item.teamtitle}</span>
              </div>
            </>
          </div>
        ))}
      </Col> */}

     
      <div className="team_social_icons">
        <NavLink xl={3} lg={3} md={3} sm={3}>
          <Image src="/fb.png" className="fb" />
        </NavLink>
        <NavLink xl={3} lg={3} md={3} sm={3}>
          <Image src="/insta.png" />
        </NavLink>
        <NavLink xl={3} lg={3} md={3} sm={3}>
          <Image src="/twitter.png" />
        </NavLink>
        <NavLink xl={3} lg={3} md={3} sm={3}>
          <Image src="/skype.png" />
        </NavLink>
      </div>
      

      <Row>
        <Slider {...settings}>
          {teamData.map((item) => (
            <div className="slider_cont">
              <>
              <Col xl={12} lg={12}>
                <Image src={item.teamimg} />
                <div className="team_cont">
                  <h2>{item.teamheading}</h2>
                  <span>{item.teamtitle}</span>
                </div>
                </Col>
              </>
            </div>
          ))}

          {/* <Col xl={3} lg={3}>
            <div className="slider_cont">
              <Image src="/teamimg1.png" />
              <div className="team_cont">
                <h2>Gustavo Herwitz</h2>
                <span>UI/UX Designer</span>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3}>
            <div className="slider_cont">
              <Image src="/teamimg1.png" />
              <div className="team_cont">
                <h2>Phillip Curtis</h2>
                <span>UI/UX Designer</span>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3}>
            <div className="slider_cont">
              <Image src="/teamimg1.png" />
              <div className="team_cont">
                <h2>Talan Torff</h2>
                <span>UI/UX Designer</span>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3}>
            <div className="slider_cont">
              <Image src="/teamimg1.png" />
              <div className="team_cont">
                <h2>Abram Vaccaro</h2>
                <span>UI/UX Designer</span>
              </div>
            </div>
          </Col>

          <Col xl={3} lg={3}>
            <div className="slider_cont">
              <Image src="/teamimg1.png" />
              <div className="team_cont">
                <h2>Gustavo Herwitz"</h2>
                <span>UI/UX Designer</span>
              </div>
            </div>
          </Col> */}
        </Slider>
      </Row>
    </>
  );
};
export default Team;
