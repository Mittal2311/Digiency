import React from "react";
import { Col, Image } from "react-bootstrap";


const Workcard = (props) => {
  const { workimg } = props.data;
  return (
    <>
      <Col xl={4} lg={4} md={4} className="workcard_img">
        <Image src={workimg}  className="wimg"/>
      </Col>
    </>
  );
};
export default Workcard;
