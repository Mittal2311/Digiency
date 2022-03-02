import React from "react";
import { Container, Row, Col ,Image } from "react-bootstrap";
import Bannerstyle from "../styles/Banner.module.css";

const DeskBanner = () => {
  return (
    <>
      <div className="banner_section">
        <Container>
          {/* <h1>Banner section</h1> */}
          <Row>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
              className={Bannerstyle.banner_part}
            >
              <h4 className={Bannerstyle.banner_heading }>
                Choose What Matters <br /> To Your Business & Your <br />{" "}
                Customers.
              </h4>
              <p className={Bannerstyle.banner_parg}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                in digni ssim euismod purus donec mus vulputate habitant
                iaculis. Com odo enim ornare turpis tempus enim, nibh nulla.
                Rhoncus sed.
              </p>
              <button className="banner_btn">Get Start Now</button>
            </Col>
            <Col xl={{span:6 , order:1}} lg={{span:6 , order:1}} md={{span:6 , order:1}} sm={{span:12, order:1}} xs={{span:12 , order:1}} className="banner_img">
            <Image src="/bannerimg2.png" className={Bannerstyle.banner_girl}/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default DeskBanner;
