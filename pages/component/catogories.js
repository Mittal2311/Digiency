import { Container, Col, Row } from "react-bootstrap";

const Catogories = (props) => {
  return (
    <Container>
      <Row>
        <Col xl={9} lg={9} md={9} sm={9} xs={9}>
          <h6 className="catogories">{props.val.title}</h6>
        </Col>

        <Col xl={3} lg={3} md={3} sm={3} xs={3} >
          <h6 className="number">
         <h6>
          {props.val.number}
         </h6> 
          </h6>
        </Col>
      </Row>
    </Container>
  );
};
export default Catogories;
