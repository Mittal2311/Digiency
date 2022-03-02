import React from "react";
import { Col, Container, Row, Image, NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="head_maindiv">
        <Container>
          <Row>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
              className="head_firstdiv"
            >
              <h2 className="head_h2">
                We Are The Best
                 <span className="head_span"> Digital Agency</span> For Business
              </h2>
              <p className="head_p">
                Amet minim molits deserunt ullamco etc sit aliqua dolor do amet
                sint. Velit office consequat duis enim velit mollit.
                Exercitation veniam conseqat sunt nastrud amet
              </p>
              <button className="header_btn">Contact Us</button>
            </Col>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
              className="head_imgdiv"
            >
              <Image src="/images/hedimg.png"  className="head_img"/>
            </Col>
          </Row>
        </Container>
        <div className="head_social-icons">
          <NavLink xl={3} lg={3} md={3} sm={3} xs={3} className="head_navlink">
            <img src="./images/facebook.png" className="head_fb" />
          </NavLink>
          <NavLink xl={3} lg={3} md={3} sm={3} xs={3} className="head_navlink">
            <img src="./images/instagram.png" className="head_insta" />
          </NavLink>
          <NavLink xl={3} lg={3} md={3} sm={3} xs={3} className="head_navlink">
            <img src="./images/skype.png" className="head_sky" />
          </NavLink>
          <NavLink xl={3} lg={3} md={3} sm={3} xs={3} className="head_navlink">
            <img src="./images/twitter.png" className="head_twit" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
