import React from 'react';
import { Container, Row, Col, CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
const Carosolslider = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className='row_css'>
                    <Carousel>
                        <CarouselItem>
                            <Col xl={6} lg={6} md={6} className='carosl_div'>

                                <div className='div_cros'>
                                    <img src="star.png" />
                                    <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                                    <img src="sliderbottom1.png" />
                                    <h6>Lincoln Lipshutz</h6>
                                    <p>CEO / Creative IT</p>
                                    <img src="coma.png" className='coma' />
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} className='carosl_div'>
                                <div className='div_cros'>
                                    <img src="star.png" />
                                    <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                                    <img src="sliderbottom1.png" />
                                    <h6>Lincoln Lipshutz</h6>
                                    <p>CEO / Creative IT</p>
                                    <img src="coma.png" className='coma' />
                                </div>
                            </Col>
                        </CarouselItem>
                    </Carousel>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Carosolslider;