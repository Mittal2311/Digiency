import React,{useState} from "react";
import {Col, Image} from "react-bootstrap";
import casestyle from "../styles/Casestudy.module.css";
const DeskStudy = (props) => {
    const { casestudyimg, casearrow } = props.data;
    return(
        <>
         <Col xl={4} lg={4} md={4} sm={4} xs={12} >
                <img src={casestudyimg}  className={casestyle.studyimg}/>
                {/* <div className="overlyarrow">
                    <img src={casearrow} className={casestyle.up_arrow}/>
                </div> */}
            </Col>
        </>
    )
}
export default DeskStudy;


