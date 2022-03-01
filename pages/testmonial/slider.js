import React from "react";
import {
    Col
} from "react-bootstrap";
const Cardslider = (props) => {

    const { img, discription, bottomimg, title, header, coma } = props.data;
    return (
        <>

            <Col xl={4} lg={4} md={6} sm={6} xs={12} card_col >
                <div className="slider_box">
                    <img src={img} />
                    <p>{discription}</p>
                    <div className="testimonial_bottom_contain">
                        <div className='slider_conatin'>
                            <img src={bottomimg} />
                            <div className='bottom_part'>
                                <h6>{title}</h6>
                                <p>{header}</p>
                            </div>
                        </div>
                        <img src={coma} className='coma' />
                    </div>
                </div>
            </Col>




        </>
    );
};
export default Cardslider;
