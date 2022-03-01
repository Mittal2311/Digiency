import React from 'react';
import {
    Col,
    Container,
    Row
} from "react-bootstrap";
const Banner = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }} className="text_banner">

                        <p className='first_contain'>Choose What Matters To Your Business & Your Customers.</p>
                        <p className='second_contain'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            in digni ssim euismod purus donec mus vulputate habitant iaculis. Com
                            odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.</p>
                        <button className='banner_butoon'>Get Start Now</button>
                    </Col>
                    <Col xl={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <img src="Frame 19.png" className='frame_19'></img></Col>
                </Row>

            </Container>
        </div>
    );
}

export default Banner;

