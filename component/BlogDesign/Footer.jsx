import React from "react";
import { Col, Container, Row, Image, NavLink, Form } from "react-bootstrap";
import Style from "../../styles/blogdesign/footer.module.css";

export const Footer = () => {
  return (
    <div className={Style.footer}>
      <Container className={Style.footer_Container}>
        <Row className={Style.footer_row}>
          <Col
            xl={3}
            lg={3}
            md={6}
            sm={12}
            xs={12}
            className={Style.footer_firstdiv}
          >
            <Image
              src="./Blog-img/Digiency 1.svg"
              className={Style.footer_firstdiv_img}
            />
            <p className={Style.footer_firstdiv_P}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
              laoreet libero dis eget maecenas bibendum.
            </p>
            <div className={Style.footer_firstdiv_row}>
              <Image
                src="./Blog-img/twitter-fill.svg"
                className={Style.footer_firstdiv_row_img}
              />
              <Image
                src="./Blog-img/instagram-fill.svg"
                className={Style.footer_firstdiv_row_img}
              />
              <Image
                src="./Blog-img/skype-fill.svg"
                className={Style.footer_firstdiv_row_img}
              />
              <Image
                src="./Blog-img/twitter-fill.svg"
                className={Style.footer_firstdiv_row_img}
              />
            </div>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={6}
            sm={12}
            xs={12}
            className={Style.footer_secounddiv}
          >
            <h2 className={Style.footer_secounddiv_h2}>Company</h2>
            <div className={Style.footer_secounddiv_nav1}>
              <NavLink className={Style.footer_secounddiv_nav}>
                About Us
              </NavLink>
              <NavLink className={Style.footer_secounddiv_nav}>
                Our Work
              </NavLink>
              <NavLink className={Style.footer_secounddiv_nav}>Client</NavLink>
              <NavLink className={Style.footer_secounddiv_nav}>
                Our Blog
              </NavLink>
              <NavLink className={Style.footer_secounddiv_nav}>
                Contact US{" "}
              </NavLink>
            </div>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={6}
            sm={12}
            xs={12}
            className={Style.footer_thirddiv}
          >
            <h2 className={Style.footer_thirddiv_h2}>Sevices</h2>
            <div className={Style.footer_thirddiv_navdiv1}>
              <NavLink className={Style.footer_thirddiv_nav}>
                Graphic Design
              </NavLink>
              <NavLink className={Style.footer_thirddiv_nav}>
                UI/UX Design
              </NavLink>
              <NavLink className={Style.footer_thirddiv_nav}>
                Web Development
              </NavLink>
              <NavLink className={Style.footer_thirddiv_nav}>
                App Development
              </NavLink>
              <NavLink className={Style.footer_thirddiv_nav}>
                Web Hosting{" "}
              </NavLink>
            </div>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={6}
            sm={12}
            xs={12}
            className={Style.footer_fourthdiv}
          >
            <div>
              <h2 className={Style.footer_fourthdiv_h2}>Newsletter</h2>
              <p className={Style.footer_fourthdiv_p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget varius viverra in.
              </p>
              <Form>
                <Form.Control
                  placeholder="info@gmail.com"
                  className={Style.footer_fourthdiv_from}
                />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={Style.secund_container}>
        <Container>
          <div className={Style.secund_container_div}>
            <p className={Style.secund_container_div_p}>
              © Copyright 2021. All Right Reserved By Ojjomedia
            </p>
            <Image
              src="./Blog-img/arrow-up-fill.svg"
              className={Style.secund_container_div_img}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};
