import React from "react";
import { Col, Image, } from "react-bootstrap";

const CardComp = (props) => {
  const { workimg, serchimg, wroktitle, desiner } = props.data;
  return (
    <>
      <Col xl={4} lg={4} md={12} className="workcard_img">
        <Image src={workimg} className="wimg" />
        <Image src={serchimg} className="imgWidth" />
        <h3 className="fifhtcomp_h2div-1">{wroktitle}</h3>
        <p className="fifthcomp_pdiv-1">{desiner}</p>
      </Col>
    </>
  );
};
export default CardComp;
