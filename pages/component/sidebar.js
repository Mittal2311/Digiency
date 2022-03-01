import { Col, Row, Container , Card } from "react-bootstrap";
import Image from "next/image";

const Sidebar = (props) => {
  return (
    <Container>
      <Row>
        <Col xl={2} lg={3} md={3} sm={2} xs={2} className="card-image">
          <img src={props.val.img} alt="search"></img>
        </Col>
        <Col xl={10} lg={9} md={9} sm={10} xs={10} className="card-title">
          <h6>{props.val.title}</h6>
        </Col>
      </Row>
    
    </Container>
  );
};
export default Sidebar;
