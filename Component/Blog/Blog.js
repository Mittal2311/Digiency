import React from 'react';
import {
    Button,
    Col,
    Container,
    Row
} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
const Blog = () => {
    return (
        <div>
            <Container>
                <div className='casestudy_title'>
                    <p><img src="Line 67.png" /> Our Blog <img src="Line 67.png" /></p>
                    <h2>Every Singel Update From Here</h2>
                </div>
                <Row>

                    <Col xl={4} lg={4} md={4} sm={6} className="blog_mainclass">
                        <div className='blog_class'>
                            <img src="blog1.png" className='blog_img' />
                            <h5>35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired</h5>



                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</p>
                            <Button className='blog_button'>Read More</Button>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="blog_mainclass">
                        <div className='blog_class'>
                            <img src="blog2.png" className='blog_img' />
                            <h5>Ridiculously powerful 2021 iPad Pro may drop this month</h5>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</p>
                            <Button className='blog_button'>Read More</Button>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="blog_mainclass">
                        <div className='blog_class'>
                            <img src="blog3.png" className='blog_img' />
                            <h5>Memphis Design: the defining look of the 1980s</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</p>
                            <Button className='blog_button'>Read More</Button>
                        </div>
                    </Col>




                </Row>
            </Container>
        </div>
    );
}

export default Blog;