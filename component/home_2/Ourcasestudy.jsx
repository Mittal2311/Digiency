import React, { useState } from "react";
import Style from "../../styles/Ourcasestudy.module.css";
import { Col, Container, NavLink, Row, Image, Nav } from "react-bootstrap";
import Ourcasestudyjson from "../../Json/Ourcasestudy.json";

export const Ourcasestudy = () => {
  const [data, setData] = useState(Ourcasestudyjson);

  const filter = (categItem) => {
    const updateItems = Ourcasestudyjson.filter((curElm) => {
      return curElm.workType === categItem;
    });
    setData(updateItems);
  };
  return (
    <>
      <div className={Style.Ourcasestudy_div}>
        <h6 className={Style.Ourcasestudy_div_h6}>Our Case Study</h6>
        <h1 className={Style.Ourcasestudy_div_h1}>Our Recent Project</h1>
        <Container>
          <Nav
            className={Style.Ourcasestudy_div_navlink}
            Nav
            variant="pills"
            defaultActiveKey="#home"
          >
            <NavLink
              href="#home"
              className={Style.Ourcasestudy_navlink}
              onClick={() => {
                setData(Ourcasestudyjson);
              }}
            >
              All
            </NavLink>
            <NavLink
              href="#UX_Design"
              className={Style.Ourcasestudy_navlink}
              onClick={() => {
                filter("UX Design");
              }}
            >
              UX Design
            </NavLink>
            <NavLink
              href="#Web_Design"
              className={Style.Ourcasestudy_navlink}
              onClick={() => {
                filter("Web Design");
              }}
            >
              Web Design
            </NavLink>
            <NavLink
              href="#App_Development"
              className={Style.Ourcasestudy_navlink}
              onClick={() => {
                filter("App Development");
              }}
            >
              App Development
            </NavLink>
            <NavLink
              href="#Game_Design"
              className={Style.Ourcasestudy_navlink}
              onClick={() => {
                filter("Game Design");
              }}
            >
              Game Design
            </NavLink>
            <NavLink
              href="#Graphic_Design"
              className={Style.Ourcasestudy_navlink}
              onClick={() => {
                filter("Graphic Design");
              }}
            >
              Graphic Design
            </NavLink>
          </Nav>
          <Row className={Style.Ourcasestudy_div_row}>
            {data.map((i) => {
              return (
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  className={Style.Ourcasestudy_col_div}
                >
                  <div className={Style.Ourcasestudy_img_div}>
                    <Image src={i.img} className={Style.Ourcasestudy_div_img} />
                    <div className={Style.Ourcasestudy_hover_div}>
                      <Image
                        src={i.img1}
                        className={Style.Ourcasestudy_div_img2}
                      />
                      <h4 className={Style.Ourcasestudy_div_h4}>{i.h4}</h4>
                    </div>
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
