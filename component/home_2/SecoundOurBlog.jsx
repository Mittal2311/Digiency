import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Style from "../../styles/secoundourblog.module.css";
import secoundourblogjson from "../../Json/secoundourblog.json";

export const Secoundourblog = () => {
  const [data] = useState(secoundourblogjson);
  return (
    <>
      <div className={Style.secoundourblog_maindiv}>
        <h6 className={Style.secoundourblog_maindiv_h6}>Our Blog</h6>
        <h2 className={Style.secoundourblog_maindiv_h2}>
          Every Singel Update From Here
        </h2>
        <Container>
          <Row className={Style.secoundourblog_maindiv_row}>
            {data.map((i) => {
              return (
                <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                  <div className={Style.Secoundourblog_firstdiv}>
                    <Image
                      src={i.img}
                      className={Style.Secoundourblog_firstdiv_img}
                    />
                    <h5 className={Style.Secoundourblog_firstdiv_h5}>{i.h5}</h5>
                    <h7 className={Style.Secoundourblog_firstdiv_h7}>{i.h7}</h7>
                    <p className={Style.Secoundourblog_firstdiv_p}>{i.p}</p>
                    <button className={Style.Secoundourblog_firstdiv_btn}>
                      {i.btn}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Container className={Style.Container2}>
        <Row>
          <Col xl={5} lg={5} md={5} sm={12} xs={12}>
            <div>
              <h5 className={Style.Container2_h5}>Subscribe Newsletter</h5>
              <h1 className={Style.Container2_h1}>Lets Stay In Touch</h1>
            </div>
          </Col>
          <Col
            xl={7}
            lg={7}
            md={7}
            sm={12}
            sx={12}
            className={Style.Container2_secounddiv}
          >
            <Form className="d-flex">
              <FormControl
                className={Style.Container2_secounddiv_fromcontrol}
                type="Search"
                placeholder="Enter your email"
                aria-label="Search"
              />
              <Button
                variant="outline-success"
                className={Style.Container2_secounddiv_btn}
              >
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
