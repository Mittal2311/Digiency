import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Style from "../styles/SecoundFooter.module.css";

const Secoundfooter = () => {
  return (
    <>
      <div className={Style.Footer_section_maindiv}>
        <Container className={Style.Footer_section_container}>
          <Row>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className={Style.Footer_col}
            >
              <div className="Footer_first_div">
                <Image src="./Desktop-images/Digiency-1.svg" />
                <p className={Style.Footer_first_divp}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor facilisi quis risus egestas ipsum.
                </p>
              </div>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className={Style.Footer_col}
            >
              <div className="Footer_secound_div">
                <h3 className={Style.Footer_secound_div_h3}>Location</h3>
                <p className={Style.Footer_secound_div_p}>
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </p>
              </div>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className={Style.Footer_col}
            >
              <div className={Style.Footer_third_div}>
                <h3 className={Style.Footer_third_div_h3}>Call Us</h3>
                <p className={Style.Footer_third_div_p1}>(252) 555-0126 </p>
                <p className={Style.Footer_third_div_p2}>info@youremai.com </p>
              </div>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className={Style.Footer_col}
            >
              <div className="Footer_four_div">
                <h3 className={Style.Footer_four_div_h3}>Follow Us</h3>
                <div className="Footer_img-div">
                  <Image
                    className={Style.Footer_four_div_img}
                    src="./Desktop-images/Facebook.svg"
                  />
                  <Image
                    className={Style.Footer_four_div_img}
                    src="./Desktop-images/Instagram.svg"
                  />
                  <Image
                    className={Style.Footer_four_div_img}
                    src="./Desktop-images/Skype.svg"
                  />
                  <Image
                    className={Style.Footer_four_div_img}
                    src="./Desktop-images/Twitter.svg"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <hr className="text-white" />
            <div className={Style.Footer_secound_container}>
              <Col xl={5} lg={5} md={5} sm={5}>
                <h5 className={Style.Footer_secound_container_h5}>
                  © Copyright 2021. All Right Reserved By Ojjomedia
                </h5>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4}>
                <ul className={Style.Footer_secound_container_ul}>
                  <li className={Style.Footer_secound_container_li}>
                    Privacy Plicy
                  </li>
                  <li className={Style.Footer_secound_container_li1}>
                    Therms of Us
                  </li>
                </ul>
              </Col>
              <Col xl={3} lg={3} md={3} sm={3} className={Style.Footer_secound_container_imgdiv}>
                <Image src="./Desktop-images/Up.svg" className={Style.Footer_secound_container_img} />
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Secoundfooter;
