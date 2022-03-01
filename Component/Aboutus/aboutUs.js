import React from 'react';
import {
    Col,
    Container,
    Row
} from "react-bootstrap";
const AboutUs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}>
                        <p className='about_title'>About Us <img src="Line 67.png" className='line'/></p>
                        <p className='about_head'>Grow Your Business With Our Agency</p>
                        <p className='about_discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus mattis eget sem habitant id ultrices augue. Sit rhoncus .</p>
                        <p className='about_point'><img src="mark.png"/>Innovative website design</p>
                        <p className='about_point'><img src="mark.png"/>UI/UX design with global trends</p>
                        <p className='about_point'><img src="mark.png"/>Web and email hosting service</p>
                    </Col>
                    <Col xl={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <img src="Frame 20.png" className="frame_20"></img></Col>
                </Row>

            </Container>
        </div>
    );
}

export default AboutUs;

