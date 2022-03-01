import {
  Col,
  Container,
  Row,
  InputGroup,
  FormControl,
  NavLink,
}from "react-bootstrap";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="cont">
      <Container className="cont">
        <Row className="mt-5">
          <Col
            xl={3}
            lg={3}
            md={{span:5}}
            sm={{ span: 8 }}
            xs={{span :10} }
            className="footer mt-4 mb-3"
            
          >
            <Image src="/digi.png" alt="logo" height="30" width="120"></Image>
            <p>
              Lorem Ipsum is simply text of the printing and typesetting
              industry.Lorem Ipsum is simply text
            </p>
            <Col xl={12} lg={12} md={12} sm={9} xs={10}
              className="icons d-flex justify-content-between mt-4"
            >
              <NavLink className ="img1">
                <Image
                  src="/fb1.png"
                  alt="fb"
                  height="15"
                  width="15"
                ></Image>
              </NavLink>
              <NavLink className ="img1" >
                <Image src="/insta.png" alt="fb" height="15" width="15"></Image>
              </NavLink>
              <NavLink className ="img1">
                <Image src="/tweet.png" alt="fb" height="15" width="15"></Image>
              </NavLink>
              <NavLink className ="img1">
                <Image src="/sky.png" alt="fb" height="15" width="15"></Image>
              </NavLink>
            </Col>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={{order:"3"}}
            sm={6}
            xs={6}
            className="company mt-3"
          >
            <h3>Company</h3>
            <div className="company-list">
              <NavLink className="nav-link" href="">
                About Us
              </NavLink>
              <NavLink href="">
                Our Work
              </NavLink>
              <NavLink href="">
                Client
              </NavLink>
              <NavLink href="">
                Our Blog
              </NavLink>
              <NavLink href="">
                Contact Us
              </NavLink>
            </div>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={{order :"3"}}
            sm={6}
            xs={6}
            className="services mt-3"
           
          >
            <h3>Services</h3>
            <div style={{ marginLeft: "-5px" }}>
              <NavLink className="nav-link" href="">
                Graphic Design
              </NavLink>
              <NavLink href="">
                UI/UX design
              </NavLink>
              <NavLink href="">
                Web Development
              </NavLink>
              <NavLink href="">
                App Development
              </NavLink>
              <NavLink href="">
                Web Hosting
              </NavLink>
            </div>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={{span:6}}
            // sm={{ span: 12}}
            className="Newsletter mt-3 mb-4 mx-auto"
            
          >
            <h3>NewsLetter</h3>
            <p className="mt-4">
              Lorem Ipsum is simply text of the printing and typesetting
              industry.Lorem Ipsum is simply text
            </p>
            <InputGroup
              className="footer-inputbox"
            >
              <FormControl
                placeholder="info@gmail.com"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                style={{ background: "#373737" }}
              />
              <InputGroup.Text
                id="basic-addon2"
               
              >
                <Image
                  src="/img1.png"
                  alt="tele"
                  height="15"
                  width="20"
                ></Image>
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Col className=" copyright container-fluid" >
          <view className="d-flex">
            <img
              className="copyrightimage"
              src="/c.png"
              alt="copyright"
              height="20"
              width="20"
            ></img>
            <p>
              Copyright 2021.All Right Reserved By Ojjomedia
            </p>
            <Col>
              <div>
                <Col>
                  <img
                  className="arrow"
                    src="arrow.png"
                    alt="logo"
                    height={20}
                    width={20}
                  ></img>
                </Col>
              </div>
            </Col>
          </view>
      </Col>

    </div>
  );
};
export default Footer;
