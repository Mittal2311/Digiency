import React from "react";
import { Container ,Row,Col,InputGroup,FormControl } from "react-bootstrap";
import stylenews from "../styles/Newsletter.module.css";



const DeskNewsletter = () => {
    return(
        <>
        <div className={stylenews.newsletter_section}>
        <Container>
            <Row>
            <div className={stylenews.newsletter_cont}>
                <Col xl={5} lg={5} md={5} sm={5} xs={5} className="newsletter_left" >
                <div>
                <h6 className={stylenews.news_subscribe }>Subscribe Newsletter</h6>
                <h2 className={stylenews.news_heading}>Lets Stay In Touch</h2>
                </div>
                </Col>

                <Col xl={7} lg={7} md={7} sm={7} xs={7}>
                <InputGroup className="mt-4">
                <FormControl
                  placeholder="Enter your email"
                //   aria-label="Recipient's username"
                //   aria-describedby="basic-addon2"
                  className={stylenews.newsletterinput}
                />
                <button className={stylenews.subscribe_btn}>Subscribe Now</button>
              </InputGroup>
                </Col>
                </div>
            </Row>
        </Container>

        </div>
        </>
    )

}
export default DeskNewsletter;