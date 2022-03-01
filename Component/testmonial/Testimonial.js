import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container,Col } from "react-bootstrap";
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
               
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
  return (
    <Container>
    <div className="myh3">
      
        <Slider {...settings}>
        <Col xl={4} lg={4} md={4} sm={4} xs={4} className="col_test">
                <div className='blog_class '>
                    <img src="star.png" />
                    <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                    <div className="testimonial_bottom_contain">
                        <div className='slider_conatin'>
                            <img src="sliderbottom1.png" />
                            <div className='bottom_part'>
                                <h6>Lincoln Lipshutz</h6>
                                <p>CEO / Creative IT</p>
                            </div>
                        </div>
                        <img src="coma.png" className='coma' />
                    </div>
                </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4} className="col_test"     >
                <div className='blog_class '>
                    <img src="star.png" />
                    <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                    <div className="testimonial_bottom_contain">
                        <div className='slider_conatin'>
                            <img src="sliderbottom2.png" />
                            <div className='bottom_part'>
                                <h6>Lincoln Lipshutz</h6>
                                <p>CEO / Creative IT</p>
                            </div>
                        </div>
                        <img src="coma.png" className='coma' />
                    </div>
                </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4} className="col_test"     >
                <div className='blog_class '>
                    <img src="star.png" />
                    <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                    <div className="testimonial_bottom_contain">
                        <div className='slider_conatin'>
                            <img src="sliderbottom3.png" />
                            <div className='bottom_part'>
                                <h6>Lincoln Lipshutz</h6>
                                <p>CEO / Creative IT</p>
                            </div>
                        </div>
                        <img src="coma.png" className='coma' />
                    </div>
                </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4} className="col_test"     >
                <div className='blog_class '>
                    <img src="star.png" />
                    <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
                    <div className="testimonial_bottom_contain">
                        <div className='slider_conatin'>
                            <img src="sliderbottom1.png" />
                            <div className='bottom_part'>
                                <h6>Lincoln Lipshutz</h6>
                                <p>CEO / Creative IT</p>
                            </div>
                        </div>
                        <img src="coma.png" className='coma' />
                    </div>
                </div>
            </Col>
           
        </Slider>
    </div>
</Container>


  );
}
export default Testimonial;

