import React from "react";
import { Container ,Row ,Col } from "react-bootstrap";
import contentstyle from "../styles/Blogcontent.module.css";
import Blogcontentjson from "../json/blogcontent.json";




const BlogContent = () => {
    return(
        <>
        <div className={contentstyle.blogcontent_section}>
        <Container>
            <Row>
                <Col xl={8} lg={8}>
                <div className="cont_img">
                <img src="/contentimg1.png" />
                </div>
                <div className="">

                </div>

                </Col>
            </Row>
        </Container>

        </div>
        </>
    )

}
export default BlogContent;