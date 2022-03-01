import React from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";
const Subscribe = () => {
    return (
        <div>

            <Container>

                <div className='sub_bottom'>
                    <Row>

                        <Col className="Sub_title" xl={5} lg={5} md={5} sm={12} xs={12} >
                            <div>
                                <p>Subscribe Newsletter</p>
                                <h2>Lets Stay In Touch</h2>
                            </div>
                        </Col>
                        <Col className="Sub_title" xl={7} lg={7} md={7} sm={12} xs={12} >
                            <Form>
                                <input placeholder='Enter your Email' className='sub_inp' />
                                <Button className='sub_btn'>Subscribe Now</Button>
                            </Form>
                        </Col>



                    </Row>  </div>
            </Container >
        </div >
    );
}

export default Subscribe;