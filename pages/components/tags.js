import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Tags = (props) => {
  const { title1, title2, title3, title4, title5, title6 } = props.data;
  return (
    <>
      {/* <Container>
        <Row className="card_3">
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="d-flex">
            <h6 lg={6} md={6} sm={6} className="h1">
              {title1}
            </h6>
            {"   "}
            <h6 lg={6} md={6} sm={6} className="h2">
              {title2}
            </h6>
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="d-flex">
            <h6 className="h1">{title3}</h6>
            {"   "}
            <h6 lg={12} md={12} className="h2">
              {title4}
            </h6>
          </Col>

          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="d-flex">
            <h6 className="h1">{title5}</h6>
            {"   "}
            <h6 lg={12} md={12} className="h2">
              {title6}
            </h6>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Col xl={12} className="card_3">
          <Row>
            <Col xl={3} lg={12} md={3} sm={3} xs={3} className="d-flex">
              <h6 className="h1">{title1}</h6>
            </Col>
            <Col xl={9} lg={12} md={9} sm={9} xs={9} className="d-flex">
              <h6 className="h2">{title2}</h6>
            </Col>
          </Row>

          <Row>
            <Col xl={4} lg={12} md={4} sm={4} xs={4} className="d-flex">
              <h6 className="h1">{title3}</h6>
            </Col>
            <Col xl={8} lg={12} md={8} sm={8} xs={8} className="d-flex">
              <h6 className="h2">{title4}</h6>
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={12} md={6} sm={6} xs={6} className="d-flex">
              <h6 className="h1">{title5}</h6>
            </Col>
            <Col xl={6} lg={12} md={6} sm={6} xs={6} className="d-flex">
              <h6 className="h2">{title6}</h6>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Tags;
