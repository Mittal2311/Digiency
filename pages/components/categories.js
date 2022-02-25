import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Categories = (props) => {
  const { title, number } = props.data;
  return (
    <>
      <Container>
        <Row>
          <Col xl={10} lg={10} sm={10} xs={10} className="card_2">
            <h6>{title}</h6>
          </Col>
          <Col xl={2} lg={2} sm={2} xs={2} className="card_22">
            <p>{number}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Categories;
