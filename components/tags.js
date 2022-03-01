import React from "react";
import { Col } from "react-bootstrap";

const Tags = (props) => {
  const { title } = props.data;
  return (
    <>
      <Col xl={6} lg={12} md={6} sm={6} xs={6} className="tags_title d-flex">
        <h6>{title}</h6>
      </Col>
    </>
  );
};

export default Tags;
