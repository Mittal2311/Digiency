/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
    Col, Image
} from "react-bootstrap";
const CaseCard = (props) => {

    const { img, arrow, title } = props.data;
    return (
        <>
            <Col xl={4} lg={4} md={4} sm={4} xs={12} className="casestudy_class">
                <img src={img} className="casecardimg" />
                <div className="case_hover">
                    {/* <img src={arrow} />
                    <h5>Web Template</h5> */}
                </div>
            </Col>
        </>
    );
};
export default CaseCard;
