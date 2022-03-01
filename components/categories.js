import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Categories = (props) => {
  const { title, number } = props.data;
  return (
    <>
      <Container>
        <Row>
          <Col xl={9} lg={9} md={10} sm={10} xs={10} className="title">
            <h6>{title}</h6>
          </Col>
          <Col xl={3} lg={3} md={2} sm={2} xs={2} className="number">
            <p>{number}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Categories;
