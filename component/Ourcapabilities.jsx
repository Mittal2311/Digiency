import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Style from "../styles/ourcapabilities.module.css";

const Ourcapabilities = () => {
  return (
    <>
      <div className="Ourcapabilities">
        <Container>
          <Row className={Style.Ourcapabilities_row}>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
            >
              <h6 className={Style.Ourcapabilities_firstdiv_h6}>
                Our Capabilities
              </h6>
              <h2 className={Style.Ourcapabilities_firstdiv_h2}>
                Forward Thinking Team Of Designers & Developers
              </h2>
              <p className={Style.Ourcapabilities_firstdiv_p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                ut nisi, amet rhoncus volutpat neque. Ipsum in aliquam eget
                vitae purus felis eget massa felis. Eu mattis in malesuada
                facilisi proin vel.
              </p>
              <div>
                <Row>
                  <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <h3 className={Style.Ourcapabilities_firstdiv_h3}> 80%</h3>
                    <h7 className={Style.Ourcapabilities_firstdiv_h7}>
                      Softwer Development
                    </h7>
                  </Col>
                  <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <h3 className={Style.Ourcapabilities_firstdiv_h3}>90%</h3>
                    <h7 className={Style.Ourcapabilities_firstdiv_h7}>
                      Graphic Design
                    </h7>
                  </Col>
                  <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <h3 className={Style.Ourcapabilities_firstdiv_h3}>85%</h3>
                    <h7 className={Style.Ourcapabilities_firstdiv_h7}>
                      Game Deisgn
                    </h7>
                  </Col>
                  <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <h3 className={Style.Ourcapabilities_firstdiv_h3}>100%</h3>
                    <h7 className={Style.Ourcapabilities_firstdiv_h7}>
                      Web Development
                    </h7>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
              className={Style.Ourcapabilities_col}
            >
              <div className={Style.Ourcapabilities_Secounddiv}>
                <Image
                  src="./Desktop-images/Frame 21.svg"
                  className={Style.Ourcapabilities_Secounddiv_img}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className={Style.Container2}>
          <Row className={Style.Container2_row}>
            <Col
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={Style.Container2_col}
            >
              <div className={Style.Container2_maindiv}>
                <Image src="./Desktop-images/man.svg" />
                <h2 className={Style.Container2_h2}>120</h2>
                <h5 className={Style.Container2_h5}>Top Experts</h5>
              </div>
            </Col>

            <Col
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={Style.Container2_col}
            >
              <div className={Style.Container2_maindiv}>
                <Image src="./Desktop-images/target.svg" />
                <h2 className={Style.Container2_h2}>500</h2>
                <h5 className={Style.Container2_h5}>Strategies</h5>
              </div>
            </Col>

            <Col
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={Style.Container2_col}
            >
              <div className={Style.Container2_maindiv}>
                <Image src="./Desktop-images/analysis.svg" />
                <h2 className={Style.Container2_h2}>347</h2>
                <h5 className={Style.Container2_h5}>Great Results</h5>
              </div>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={Style.Container2_col}
            >
              <div className={Style.Container2_maindiv}>
                <Image src="./Desktop-images/data-analytics.svg" />
                <h2 className={Style.Container2_h2}>120</h2>
                <h5 className={Style.Container2_h5_h5}>Hight Rankings</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Ourcapabilities;
