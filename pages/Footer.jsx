import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* <Container fluid> */}
          <div className="container-fluid footer_bg">
            <div className="container footer_container">
              {/* <Row> */}
                <div className="row d-flex footer_maindiv">
                  {/* <Col
                    xl={3}
                    lg={{ span: 3 }}
                    md={{ span: 6 }}
                    sm={{ span: 12 }}
                    xs={{ span: 12 }}
                  > */}
                    <div className="footer_firstdiv  col-12 col-sm-6  col-md-6 col-lg-3 col-xl-3 ">
                      <img src="/LOGO.png" className="logo" />
                      <p>
                        Lorem ipsum sit amet, consectetur adipiscing ellit ,Sit
                        a laoreet libero dis edge naecena bibendum
                      </p>
                      <div className="social-icons">
                        <div className="img1 ">
                          <img src="/facebook.png" className=" bg1" />
                          <img src="/instagram.png" className="bg2" />
                          <img src="/twitter.png" className="bg2" />
                          <img src="/skype.png" className="bg2" />
                        </div>
                      </div>
                    </div>
                  {/* </Col> */}
                  {/* <Col
                    xl={3}
                    lg={{ span: 3 }}
                    md={{ span: 6 }}
                    sm={{ span: 12 }}
                    xs={{ span: 12 }}
                  > */}
                    <div className="footer_secounddiv  col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                      <div className="secound_div">
                        <h2>Company</h2>
                        <ul>
                          <li>About Us</li>
                          <li>Our Clients</li>
                          <li>Clients</li>
                          <li>Our Blog</li>
                          <li>Contact Us</li>
                        </ul>
                      </div>
                    </div>
                  {/* </Col>
                  <Col
                    lg={{ span: 3 }}
                    md={{ span: 6 }}
                    sm={{ span: 12 }}
                    xs={{ span: 12 }}
                  > */}
                    <div className="footer_thirddiv  col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                      <div className="third_div">
                        <h2>Services</h2>
                        <ul>
                          <li>Graphic Design</li>
                          <li>Ul/Ux Design</li>
                          <li>Web Development</li>
                          <li>App Development</li>
                          <li>web Hosting</li>
                        </ul>
                      </div>
                    </div>
                  {/* </Col>
                  <Col
                    lg={{ span: 3 }}
                    md={{ span: 6 }}
                    sm={{ span: 12 }}
                    xs={{ span: 12 }}
                  > */}
                    <div className="footer_fourthdiv  col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                      <div className="fourth_div">
                        <h2>Newsletter</h2>
                        <p>
                          Lorem ipsum sit amet, consectetur adipiscing ellit
                          ,Sit a laoreet libero dis edge naecena bibendum
                        </p>
                        <input type="text" placeholder="info@gmail.com" />
                      </div>
                    </div>
                  {/* </Col> */}
                </div>
              {/* </Row> */}
            </div>
          </div>
        {/* </Container> */}
        <div className="container-fluid last_bg">
          <div className="container">
            <div className="last_div1">
              <p>© Copyright 2022. All Right Reserved By Ojjomedia </p>
              <img src="/Arrow.png" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
