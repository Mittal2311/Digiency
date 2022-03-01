import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Content = (props) => {
  const {
    image,
    title,
    description,
    btn,
    icon1,
    icon2,
    icon3,
    date,
    name,
    cmnt,
  } = props.data;

  return (
    <>
      <Container className="content mt-5">
        <Col xl={12}>
          <div className="main_img">
            <img src={image} alt="main_image" />
          </div>

          <Row className="content_icons d-flex mt-4">
            <Col xl={4} lg={6} md={6} sm={6} xs={6} className="d-flex">
              <img src={icon1} alt="clock" /> <h5>{date}</h5>
            </Col>
            <Col xl={4} lg={6} md={6} sm={6} xs={6} className="d-flex">
              <img src={icon2} alt="user" /> <h5>{name}</h5>
            </Col>
            <Col xl={4} className="d-flex content_icon">
              <img src={icon3} alt="comment" /> <h5>{cmnt}</h5>
            </Col>
          </Row>

          <h1>{title}</h1>

          <p>{description}</p>

          <button>{btn}</button>
        </Col>
      </Container>
    </>
  );
};
export default Content;
