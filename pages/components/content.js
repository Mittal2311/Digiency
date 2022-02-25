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
      <Container className="cont_3">
        <Col xl={12}>
          <div className="main_img">
            <img src={image} alt="main_image" />
          </div>

          <div className="icons d-flex mt-4">
            <div className="d-flex icons_img">
              <img src={icon1} alt="icon1" /> <h6>{date}</h6>
            </div>
            <div className="d-flex icons_img">
              <img src={icon2} alt="icon2" /> <h6>{name}</h6>
            </div>
            <div className="d-flex icons_img">
              <img src={icon3} alt="icon3" /> <h6>{cmnt}</h6>
            </div>
          </div>

          <h1>{title}</h1>

          <p>{description}</p>

          <button>{btn}</button>
        </Col>
      </Container>
    </>
  );
};
export default Content;
