import {
  Col,
  Container,
  Row,
  InputGroup,
  FormControl,
  NavLink,
} from "react-bootstrap";
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
            className="item1"
            style={{ marginTop: "30px" }}
          >
            <Image src="/digi.png" alt="logo" height="30" width="120"></Image>
            <p style={{ marginTop: "20px", color: "white" }}>
              Lorem Ipsum is simply text of the printing and typesetting
              industry.Lorem Ipsum is simply text
            </p>
            <div
              className="d-flex justify-content-between"
              style={{ marginTop: "30px", marginRight: "40px" }}
            >
              <NavLink className ="img1">
                <Image
                  src="/facebook2.png"
                  alt="fb"
                  height="20"
                  width="20"
                ></Image>
              </NavLink>
              <NavLink style={{ background: "white" }}>
                <Image src="/insta.png" alt="fb" height="15" width="15"></Image>
              </NavLink>
              <NavLink style={{ background: "white" }}>
                <Image src="/tweet.png" alt="fb" height="15" width="15"></Image>
              </NavLink>
              <NavLink style={{ background: "white" }}>
                <Image src="/sky.png" alt="fb" height="15" width="15"></Image>
              </NavLink>
            </div>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={3}
            sm={6}
            xs={6}
            className="item2"
            style={{ marginTop: "30px" }}
          >
            <h3 style={{ color: "white" }}>Company</h3>
            <div style={{ marginLeft: "-5px" }}>
              <NavLink href="" style={{ color: "white", padding: "3.5px" }}>
                About Us
              </NavLink>
              <NavLink href="" style={{ color: "white", padding: "3.5px" }}>
                Our Work
              </NavLink>
              <NavLink href="" style={{ color: "white", padding: "3.5px" }}>
                Client
              </NavLink>
              <NavLink href="" style={{ color: "white", padding: "3.5px" }}>
                Our Blog
              </NavLink>
              <NavLink href="" style={{ color: "white", padding: "3.5px" }}>
                Contact Us
              </NavLink>
            </div>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={3}
            sm={6}
            xs={6}
            className="item3"
            style={{ marginTop: "30px" }}
          >
            <h3 style={{ color: "white" }}>Services</h3>
            <div style={{ marginLeft: "-5px" }}>
              <NavLink href="" style={{ color: "white", padding: "3.5px" }}>
                Graphic Design
              </NavLink>
              <NavLink href="" style={{ color: "white", padding: "3.5px" }}>
                UI/UX design
              </NavLink>
              <NavLink href="" style={{ color: "white", padding: "3.5px" }}>
                Web Development
              </NavLink>
              <NavLink href="" style={{ color: "white", padding: "3.5px" }}>
                App Development
              </NavLink>
              <NavLink href="" style={{ color: "white", padding: "3.5px" }}>
                Web Hosting
              </NavLink>
            </div>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={{ span: 12 }}
            sm={{ span: 12}}
            className="item4"
            style={{ marginTop: "30px" }}
          >
            <h3 style={{ color: "white" }}>NewsLetter</h3>
            <p
              style={{ color: "white", marginTop: "20px", marginLeft: "-3px" }}
            >
              Lorem Ipsum is simply text of the printing and typesetting
              industry.Lorem Ipsum is simply text
            </p>
            <InputGroup
              className="mb-3"
              style={{ border: "1px solid #FF5300", marginTop: "30px" }}
            >
              <FormControl
                placeholder="info@gmail.com"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                style={{ background: "#373737" }}
              />
              <InputGroup.Text
                id="basic-addon2"
                style={{ background: "#FF5300" }}
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
      <div className=" copyright container-fluid" style={{ marginTop: "20px" }}>
        <Row style={{ background: "#FF5300" }}>
          <view className="d-flex">
            <img
              src="/c.png"
              alt="copyright"
              height="20"
              width="20"
              style={{ marginTop: "13px", marginLeft: "70px" }}
            ></img>
            <p style={{ marginTop: "9px", color: "white", marginLeft: "50px" }}>
              Copyright 2021.All Right Reserved By Ojjomedia
            </p>
            <Col>
              <div>
                <Col>
                  <img
                    src="arrow.png"
                    alt="logo"
                    height={20}
                    width={20}
                    style={{
                      marginTop: "9px",
                      float: "right",
                      marginRight: "px",
                    }}
                  ></img>
                </Col>
              </div>
            </Col>
          </view>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
