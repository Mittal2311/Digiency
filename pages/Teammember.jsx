import React, { useState } from "react";
import { Container, Col, Row, Card, Image } from "react-bootstrap";
import TeammemberCard from "./Teammembercard";
import data from "./Temmember.json";

const TeammemberComp = () => {
  const [mainData] = useState(data);
  return (
    <>
      <div className="fourthcomp">
        <Container>
          <Row>
            <h5>Team Member</h5>
            <h2>
              We Have <br /> <span>Some Awesome</span> People
            </h2>
            {mainData.map((i) => (
              <TeammemberCard data1={i} />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TeammemberComp;
