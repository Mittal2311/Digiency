import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Style from "../../styles/Banner2.module.css";

export const Banner2 = () => {
  return (
    <div className={Style.banner2Comp}>
      <Container className={Style.Banner2_container}>
        <Row className={Style.banner2Comp_row}>
          <Col
            xl={{ span: 6, order: 1 }}
            lg={{ span: 6, order: 1 }}
            md={{ span: 6, order: 1 }}
            sm={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
            className={Style.Banner2_col1}
          >
            <div className={Style.Banner2_firstdiv}>
              <h1 className={Style.Banner2_firstdiv_h1}>
                Choose What Matters To Your Business & Your Customers.
              </h1>
              <p className={Style.Banner2_firstdiv_p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                in digni ssim euismod purus donec mus vulputate habitant
                iaculis. Com odo enim ornare turpis tempus enim, nibh nulla.
                Rhoncus sed.
              </p>
              <button className={Style.Banner2_firstdiv_btn}>
                Get Start Now
              </button>
            </div>
          </Col>
          <Col
            xl={{ span: 6, order: 1 }}
            lg={{ span: 6, order: 1 }}
            md={{ span: 6, order: 1 }}
            sm={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
          >
            <div className="Banner2_secounddiv">
              <Image src="./Desktop-images/Frame 19.svg" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
