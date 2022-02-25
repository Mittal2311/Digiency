import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Tags = (props) => {
  const { title1, title2, title3, title4, title5, title6 } = props.data;
  return (
    <>
      <Container>
        <Row className="card_3">
          <Col xl={6} lg={12} md={12} sm={12} xs={12} className="d-flex">
            <h6 className="h1">{title1}</h6>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} xs={12} className="d-flex">
            <h6 className="h2">{title2}</h6>
          </Col>
        </Row>

        <Row className="card_3">
          <Col xl={6} lg={12} md={12} sm={12} xs={12} className="d-flex">
            <h6 className="h1">{title3}</h6>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} xs={12} className="d-flex">
            <h6 className="h2">{title4}</h6>
          </Col>
        </Row>

        <Row className="card_3">
          <Col xl={6} lg={12} md={12} sm={12} xs={12} className="d-flex">
            <h6 className="h1">{title5}</h6>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} xs={12} className="d-flex">
            <h6 className="h2">{title6}</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tags;
