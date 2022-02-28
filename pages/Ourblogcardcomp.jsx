import React from "react";
import { Container, Row, Image, Col, Carousel } from "react-bootstrap";

const Ourblogcardcomp = (props) => {
    const {grafdesign,  headig1, img1, img2, heading2,pera} = props.data1
return (<>
    <Col xl={6} lg={6} md={6} className="ourblogcomp_firstcomp">
                <div className="ourblogcomp_firstdiv">
                  <h6 className="first_h6">{grafdesign}</h6>
                  <h4 className="firstdiv_h4">{headig1}</h4>
                  <Image src={img1} className="firstdiv_img" />

                  <div className="firstdiv_secoundcomp">
                    <Image src={img2} className="secoundiv1_img1" />
                    <div className="wahh">
                      <h4 className="secound_h6">{heading2}</h4>
                      <h7 className="first_h7">{pera}</h7>
                      <h7 className="secound_h7"></h7>
                    </div>
                  </div>
                </div>
              </Col>
</>)
}

export default Ourblogcardcomp;