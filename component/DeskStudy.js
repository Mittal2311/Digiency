import React,{useState} from "react";
import {Col, Image} from "react-bootstrap";
import casestyle from "../styles/Casestudy.module.css";
const DeskStudy = (props) => {
    const { casestudyimg, casearrow ,casetitle} = props.data;
    return(
        <>
         <Col xl={4} lg={4} md={4} sm={4} xs={12} className={casestyle.casestudyhover}>
                <img src={casestudyimg}  className={casestyle.studyimg}/>
                <div className={casestyle.overlyarrow}>
                    <img src={casearrow} className={casestyle.up_arrow}/>
                    <h4 className={casestyle.casestudy_title}>{casetitle}</h4>
                </div>
            </Col>
        </>
    )
}
export default DeskStudy;


