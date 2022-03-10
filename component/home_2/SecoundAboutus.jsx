import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Style from "../../styles/SecoundAboutus.module.css";

export const SecoundAboutus = () => {
  return (
    <>
      <div className={Style.SecoundAboutus}>
        <Container>
          <Row className={Style.SecoundAboutus_row}>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
            >
              <h6 className={Style.SecoundAboutus_firstdiv_h6}>About Us</h6>
              <h2 className={Style.SecoundAboutus_firstdiv_h2}>
                Grow Your Business With Our Agency
              </h2>
              <p className={Style.SecoundAboutus_firstdiv_p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Convallis arcu in tincidunt sed imperdiet etiam fames. Tincidunt
                augue risus mattis eget sem habitant id ultrices augue. Sit
                rhoncus .
              </p>
              <ul className={Style.SecoundAboutus_firstdiv_ul}>
                <li>Innovative website design</li>
                <li>UI/UX design with global trends</li>
                <li>Web and email hosting service</li>
              </ul>
            </Col>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
            >
              <div className={Style.SecoundAboutus_secounddiv}>
                <Image
                  src="./Desktop-images/Frame 20.svg"
                  className={Style.SecoundAboutus_secounddiv_img}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
