import Link from "next/link";
import React, { useState } from "react";
import { Nav, Container, NavLink, Row, Image, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";
import fifthjson from "./Fifth.json";


const FifthComp = () => {
  const [workdata, setWorkData] = useState(fifthjson);
  console.log(workdata, "find2");

  const filterItem = (categItem) => {
    const updateItems = fifthjson.filter((currElm) => {
      return currElm.workType === categItem;
    });
    setWorkData(updateItems);
    console.log(updateItems, "find");
  };

  const breakpoints = { default: 3, 1199: 3, 700: 2, 500: 1 };
  return (
    <>
      <div className="fifthcomp">
        <Container>
          <h5>Our Work</h5>
          <h2>
            We Are Some <br />
            <span>Designed & Development</span> Projects
          </h2>
          <Nav
            className="casestudy_header mb-5"
            Nav
            variant="pills"
            defaultActiveKey="#home"
          >
            <Nav.Link
              href="#home"
              onClick={() => {
                setWorkData(fifthjson);
              }}
            >
              All
            </Nav.Link>
            <Nav.Link
              href="#UX_Design"
              onClick={() => {
                filterItem("Graphic Design");
              }}
            >
              Graphic Design
            </Nav.Link>
            <Nav.Link
              href="#Web_Design"
              onClick={() => filterItem("UI/UX Design")}
            >
              UI/UX Design
            </Nav.Link>
            <Nav.Link
              href="#App_Development"
              onClick={() => filterItem("Web Development")}
            >
              Web Development
            </Nav.Link>
          </Nav>
          <Row>
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {workdata.map((i) => (
                <Col xl={4} lg={4} md={12} className="workcard_img">
                  <Image src={i.workimg} className="wimg" />
                  <Image src={i.serchimg} className="imgWidth" />
                  <h3 className="fifhtcomp_h2div-1">{i.wroktitle}</h3>
                  <p className="fifthcomp_pdiv-1">{i.desiner}</p>
                </Col>
              ))}
            </Masonry>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FifthComp;
