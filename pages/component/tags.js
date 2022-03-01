import { Container, Col, Row } from "react-bootstrap";

const Tags = (props) => {
  return (
    <Container>
    <Row>
      {/* <Col xl={6} className="d-flex bg-info">
         <h6>{props.val.topic}</h6>
      </Col> */}
       <Col xl={6} lg={6} md={12} className="bg-danger">
        <h6>{props.val.title}</h6>
       </Col> 
   </Row>
   
    </Container>
  );
};
export default Tags;
