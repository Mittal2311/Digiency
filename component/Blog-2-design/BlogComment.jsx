import React from "react";
import Style from "../../styles/blog2design/blogcomment.module.css";
import {
  Container,
  Row,
  Col,
  Image,
  NavDropdown,
  FloatingLabel,
  Form,
  NavLink,
} from "react-bootstrap";

const Blogcomment = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div className={Style.comment_filter_maindiv}>
                <div className={Style.comment_filter_maindiv_heddiv}>
                  <NavLink className={Style.comment_filter_maindiv_heddiv_h3}>
                    3 Comments
                  </NavLink>
                  <NavLink className={Style.comment_filter_maindiv_heddiv_h3}>
                    Disqus
                  </NavLink>
                  <NavLink className={Style.comment_filter_maindiv_heddiv_h3}>
                    Gwen
                  </NavLink>
                </div>
                <hr className={Style.comment_filter_maindiv_heddiv_hr} />
                <div className={Style.comment_filter_maindiv_secounddiv}>
                  <div className={Style.comment_filter_maindiv_secounddiv_img1}>
                    <Image
                      src="./Blog-img/Frame.svg"
                      className={Style.comment_filter_maindiv_secounddiv_img}
                    />
                    <h5 className={Style.comment_filter_maindiv_secounddiv_h3}>
                      Recommend
                    </h5>
                  </div>
                  <NavDropdown title="Sort By Best" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <>
                  <FloatingLabel controlId="floatingTextarea2" label="">
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      className={Style.Form}
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </>
                {/* <div className={Style.comment_filter_maindiv_thirddiv}></div> */}
                <div className={Style.comment_filter_maindiv_fourthddiv}>
                  <Image
                    src="./Blog-img/Profile (14).svg"
                    className={Style.comment_filter_maindiv_fourthddiv_img}
                  />
                  <div className={Style.comment_filter_maindiv_fourthddiv_div}>
                    <h3
                      className={Style.comment_filter_maindiv_fourthddiv_div_h3}
                    >
                      Ruben Vetrovs
                    </h3>
                    <p
                      className={Style.comment_filter_maindiv_fourthddiv_div_p}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                      ultrices metus ut sed. Sit nunc, in nibh nisi, viverra
                      quis sociis malesuada.
                    </p>
                  </div>
                </div>
                <div className={Style.comment_filter_maindiv_fifthddiv_div}>
                  <Image
                    src="./Blog-img/Profile (15).svg"
                    className={Style.comment_filter_maindiv_fifthddiv_div_img}
                  />
                  <div
                    className={Style.comment_filter_maindiv_fifthddiv_div_div}
                  >
                    <h3
                      className={Style.comment_filter_maindiv_fifthddiv_div_h3}
                    >
                      Alfonso Philips
                    </h3>
                    <p className={Style.comment_filter_maindiv_fifthddiv_div_p}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                      ultrices metus ut sed. Sit nunc, in nibh nisi, viverra
                      quis sociis malesuada.
                    </p>
                  </div>
                </div>
                <div className={Style.comment_filter_maindiv_fifthddiv_div}>
                  <Image
                    src="./Blog-img/Profile (16).svg"
                    className={Style.comment_filter_maindiv_fifthddiv_div_img}
                  />
                  <div
                    className={Style.comment_filter_maindiv_fifthddiv_div_div}
                  >
                    <h3
                      className={Style.comment_filter_maindiv_fifthddiv_div_h3}
                    >
                      Cooper Herwitz
                    </h3>
                    <p className={Style.comment_filter_maindiv_fifthddiv_div_p}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                      ultrices metus ut sed. Sit nunc, in nibh nisi, viverra
                      quis sociis malesuada.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blogcomment;
