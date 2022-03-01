// import React from 'react';

// import { Container, Row, Col, Image } from 'react-bootstrap';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// const Test = (props) =>{
//     return (
//         <div>
//             <Carousel>
//                 <div>
//                     <img src="star.png" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="star.png" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="star.png" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 </Carousel>
//         </div>
//     );
// }

// export default Test;
import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Image } from 'react-bootstrap';
export default class Test extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Container>
                    <h2> Responsive </h2>
                  
                        <Row>
                        <Slider {...settings}>
                            <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div>
                                    <img src="star.png" />
                                    <p className="legend">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                                    <img src="sliderbottom1.png" />
                                    <h6>Phillip Levin</h6>
                                    <p>CEO / Creative IT</p>
                                    <img src="coma.png" className='coma' />
                                </div>
                            </Col>

                            <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div>
                                    <img src="star.png" />
                                    <p className="legend">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                                    <img src="sliderbottom1.png" />
                                    <h6>Phillip Levin</h6>
                                    <p>CEO / Creative IT</p>
                                    <img src="coma.png" className='coma' />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div>
                                    <img src="star.png" />
                                    <p className="legend">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                                    <img src="sliderbottom1.png" />
                                    <h6>Phillip Levin</h6>
                                    <p>CEO / Creative IT</p>
                                    <img src="coma.png" className='coma' />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div>
                                    <img src="star.png" />
                                    <p className="legend">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                                    <img src="sliderbottom1.png" />
                                    <h6>Phillip Levin</h6>
                                    <p>CEO / Creative IT</p>
                                    <img src="coma.png" className='coma' />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div>
                                    <img src="star.png" />
                                    <p className="legend">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                                    <img src="sliderbottom1.png" />
                                    <h6>Phillip Levin</h6>
                                    <p>CEO / Creative IT</p>
                                    <img src="coma.png" className='coma' />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div>
                                    <img src="star.png" />
                                    <p className="legend">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                                    <img src="sliderbottom1.png" />
                                    <h6>Phillip Levin</h6>
                                    <p>CEO / Creative IT</p>
                                    <img src="coma.png" className='coma' />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div>
                                    <img src="star.png" />
                                    <p className="legend">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                                    <img src="sliderbottom1.png" />
                                    <h6>Phillip Levin</h6>
                                    <p>CEO / Creative IT</p>
                                    <img src="coma.png" className='coma' />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div>
                                    <img src="star.png" />
                                    <p className="legend">Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                                    <img src="sliderbottom1.png" />
                                    <h6>Phillip Levin</h6>
                                    <p>CEO / Creative IT</p>
                                    <img src="coma.png" className='coma' />
                                </div>
                            </Col>
                            </Slider>
                        </Row>
                
                </Container>
            </div>
        );
    }
}