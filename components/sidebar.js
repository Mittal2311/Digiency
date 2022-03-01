import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Sidebar = (props) => {
  const { image, title } = props.data;
  return (
    <>
      <Container className="card_1 mt-4">
        <Row className="d-flex">
          <Col xl={3} lg={4} md={2} sm={2} xs={3}>
            <img src={image} alt="img" />
          </Col>
          <Col xl={9} lg={8} md={10} sm={10} xs={9}>
            {title}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sidebar;
