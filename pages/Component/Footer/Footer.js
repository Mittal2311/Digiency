/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {Col,Container,Row} from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xl={3} lg = {{span: 3, order: 1}} md={{span: 6, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}}>
            <div className="footer_header">
              <img src="/footerDigiency.png" className="footerDigiency"></img>
            </div>
            <p>
              <a className="footer_onetext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                facilisi quis risus egestas ipsum.
              </a>
            </p>
          </Col>
          <Col xl={3} lg = {{span: 3, order: 2}} md={{span: 6, order: 3}} sm={{span: 12, order: 3}} xs={{span: 12, order: 3}}>
            <h6 className="footer_header">Location</h6>
            <p>
              <a className="footer_twotext">
                3517 W. Gray St. Utica, Pennsylvania 57867
              </a>
            </p>
          </Col>
          <Col xl={3} lg = {{span: 3, order: 3}}  md={{span: 6, order: 4}} sm={{span: 12, order: 4}} xs={{span: 12, order: 4}}>
            <h6 className="footer_header">Call Us</h6>
            <p>
              <a href="tel:+(252) 555-0126" className="footer_twotext">(252) 555-0126</a>
            </p>
            <p>
            
              <a href="mailto:info@youremai.com" className="footer_twotext">info@youremai.com</a>
            </p>
          </Col>
          <Col xl={3} lg ={{span: 3, order: 4}} md={{span: 6, order: 2}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}}>
            <h6 className="footer_header">Follow Us</h6>
            <div className="Footer_logo">
              <Row>
               <Col xl={3} lg={6} md={3} sm={3} xs={3}>  <img src="/Facebook.png"  className="logo_follow"></img></Col>
               <Col xl={3} lg={6} md={3} sm={3} xs={3}> <img src="/Instagram.png" className="logo_follow"></img></Col>
               <Col xl={3} lg={6} md={3} sm={3} xs={3}>  <img src="/Skype.png" className="logo_follow"></img></Col>
               <Col xl={3} lg={6} md={3} sm={3} xs={3}> <img src="/Twitter.png" className="logo_follow"></img></Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className="footer_line"></div>
        <Row>
          <Col xl={5} lg ={5} md={12}>
            <div className="footer_one">
              <img src="Copyright.png" className="copyright"></img>
              <p>Copyright 2021. All Right Reserved By Ojjomedia</p>
            </div>
          </Col>
          <Col xl={2} lg = {2} md={4} sm={4} xs={4}>
            <div className="footer_two_o">
              <img src="Orange dot.png" className="orange_dot"></img>
              <p>Privacy Plicy</p>
              
            </div>
          </Col>
          <Col xl={2} lg = {2} md={4} sm={4} xs={4}>
            <div className="footer_two_t">
              <img src="Orange dot.png" className="orange_dot"></img>
              <p>Therms of Us</p>
            </div>
          </Col>
          <Col xl={3} lg = {3} md={4} sm={4} xs={4}>
            <div className="footer_three">
              <img src="Up.png" className="Up_logo"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
