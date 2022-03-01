import React from "react";
import {
    Col, Container, Row
} from "react-bootstrap";
const Card = (props) => {

    const { img, title, discription, num, header } = props.data;
    return (
        <>


            <Col xl={4} lg={4} md={6} sm={6} xs={12} card_col>
                <div className="card_box">
                    <div className="fisrt_conatain">
                        <img src={img} className="cardimg" />
                        <p className="num_css">{num}</p>
                    </div>

                    <p className="card_title">{title}</p>
                    <p className="card_link">{header}</p>
                    <p className="card_discription">{discription}</p>
                </div>
            </Col>



        </>
    );
};
export default Card;
