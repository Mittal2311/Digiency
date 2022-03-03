import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Style from "../styles/Ourservice.module.css";
import Ourservicejson from "../Json/ourservice.json";

const Ourservice = () => {
  const [data] = useState(Ourservicejson);
  return (
    <>
      <div className={Style.Ourservice_maindiv}>
        <Container>
          <Row className={Style.Ourservice_row}>
            <h6 className={Style.Ourservice_maindiv_h6}>Our Services</h6>
            <h2 className={Style.Ourservice_maindiv_h2}>What We Do</h2>
            {data.map((i) => {
              return (
                <Col xl={4} lg={4} md={6} sm={12} xs={12} className={Style.Ourservice_col}>
                  <div className={Style.Ourservice_firstdiv}>
                    <Image
                      src={i.img}
                      className={Style.Ourservice_firstdiv_img}
                    />
                    <h1 className={Style.Ourservice_firstdiv_h1}>{i.h1}</h1>
                  </div>
                  <div className={Style.Ourservice_secound_div}>
                    <h3 className={Style.Ourservice_secound_div_h3}>{i.h3}</h3>
                    <h6 className={Style.Ourservice_secound_div_h6}>{i.h6}</h6>
                    <p className={Style.Ourservice_secound_div_p}>{i.p}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Ourservice;
