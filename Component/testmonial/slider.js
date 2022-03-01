import React from "react";
import {
    Col
} from "react-bootstrap";
const Cardslider = (props) => {

    const { img, discription, bottomimg, title, header, coma } = props.data;
    return (
        <>

            <Col xl={4} lg={4} md={4} sm={4} xs={4} className="col_test">
                <div className='blog_class '>
                    <img src={img} />
                    <p>{discription}</p>
                    <div className="testimonial_bottom_contain">
                        <div className='slider_conatin'>
                            <img src={bottomimg}/>
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
