import React from "react";
import { Container, Col, Row, Card, Image } from "react-bootstrap";

const TeammemberCard = (props) => {
  const { img, img2, img3, img4, img5, cardheading, cardtext } = props.data1;
  return (
    <>
      <Col xl={3} lg={3} md={6} sm={6} xs={12}>
        <Card className="fourthcomp_card fourthcom_firstDiv">
          <Card.Body className="fourthcomp_body">
            <Image src={img} className="fourthcom_img" />
            <Image src={img2} className="fourthcomp_social-icon" />
            <Image src={img3} className="fourthcomp_social-icon1" />
            <Image src={img4} className="fourthcomp_social-icon2" />
            <Image src={img5} className="fourthcomp_social-icon3" />
            <h3>{cardheading}</h3>
            <Card.Text className="fourthcomp_text">{cardtext}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default TeammemberCard;
