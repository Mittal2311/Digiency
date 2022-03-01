import { Container, Col, Row } from "react-bootstrap";

const Tags = (props) => {
  return (
    <Col xl={6} lg={6} md={12} sm={6} xs={6} className="tagss mt-3">
      <h6>{props.val.title}</h6>
    </Col>
  );
};
export default Tags;
