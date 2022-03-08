import React, { useState } from "react";
import { Col, Container, Row, Image, Form, FormControl } from "react-bootstrap";
import Style from "../../styles/blogdesign/blogpart.module.css";
import data from "../../Json/Blog-json/Blogpart.json";

const Blogpart = () => {
  const [dataj] = useState(data);
  return (
    <>
      <div className="blogpart">
        <Container>
          <Row className={Style.Blogpart_row}>
            <Col
              xl={{ span: 8, order: 1 }}
              lg={{ span: 8, order: 1 }}
              md={{ span: 8, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
            >
              {dataj.map((i) => {
                return (
                  <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Image src={i.img} className={Style.Blogpart_First_img} />
                    <div className={Style.Blogpart_img_row}>
                      <div className={Style.Blogpart_img_div}>
                        <Image
                          src={i.img1}
                          className={Style.Blogpart_imgmain_div_img}
                        />
                        <p className={Style.Blogpart_imgmain_div_p}>{i.p}</p>
                      </div>

                      <div className={Style.Blogpart_img_div}>
                        <Image
                          src={i.img2}
                          className={Style.Blogpart_imgmain_div_img}
                        />
                        <p className={Style.Blogpart_imgmain_div_p}>{i.p1}</p>
                      </div>

                      <div className={Style.Blogpart_img_div}>
                        <Image
                          src={i.img3}
                          className={Style.Blogpart_imgmain_div_img}
                        />
                        <p className={Style.Blogpart_imgmain_div_p}>{i.p2}</p>
                      </div>
                    </div>
                    <h3 className={Style.Blogpart_h3}>{i.h3}</h3>
                    <h6 className={Style.Blogpart_h6}>{i.h6}</h6>
                    <button className={Style.Blogpart_btn}>Read More</button>
                  </Col>
                );
              })}
            </Col>
            <Col
              xl={{ span: 4, order: 1 }}
              lg={{ span: 4, order: 1 }}
              md={{ span: 4, order: 1 }}
              sm={{ span: 12, order: 3 }}
              xs={{ span: 12, order: 3 }}
            >
              <Form className={Style.blogpart_secounddiv_from}>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className={Style.blogpart_secounddiv_fromcontrol}
                  aria-label="Search"
                />
                <Image
                  src="./Blog-img/search.png"
                  className={Style.blogpart_secounddiv_img}
                />
              </Form>
              <div className={Style.blogpart_secounddiv}>
                <h5 className={Style.blogpart_secounddiv_h5}>Letest Post</h5>
                <div className={Style.blogpart_secounddiv_partdiv}>
                  <Image
                    src="./Blog-img/Image (1).svg"
                    className={Style.blogpart_secounddiv_partdiv_img}
                  />
                  <h6 className={Style.blogpart_secounddiv_partdiv_h6}>
                    Minimal Post With A Preview Image
                  </h6>
                </div>
                <div className={Style.blogpart_secounddiv_partdiv}>
                  <Image
                    src="./Blog-img/Image (2).svg"
                    className={Style.blogpart_secounddiv_partdiv_img}
                  />
                  <h6 className={Style.blogpart_secounddiv_partdiv_h6}>
                    Good Design Makes Me Happy
                  </h6>
                </div>

                <div className={Style.blogpart_secounddiv_partdiv}>
                  <Image
                    src="./Blog-img/Image (3).svg"
                    className={Style.blogpart_secounddiv_partdiv_img}
                  />
                  <h6 className={Style.blogpart_secounddiv_partdiv_h6}>
                    Best 27 Design Blogs for 2021
                  </h6>
                </div>

                <div className={Style.blogpart_secounddiv_partdiv}>
                  <Image
                    src="./Blog-img/Image (4).svg"
                    className={Style.blogpart_secounddiv_partdiv_img}
                  />
                  <h6 className={Style.blogpart_secounddiv_partdiv_h6}>
                    Creative Ways To Use Infographics For Your Business
                  </h6>
                </div>
                <div className={Style.blogpart_secounddiv_partdiv}>
                  <Image
                    src="./Blog-img/Image (6).svg"
                    className={Style.blogpart_secounddiv_partdiv_img}
                  />
                  <h6 className={Style.blogpart_secounddiv_partdiv_h6}>
                    Tumblr Banner Templates : Tips To Get Better Engagement
                  </h6>
                </div>
              </div>

              <div className={Style.Blogpart_categories_div}>
                <h3 className={Style.Blogpart_categories_div_h3}>Categories</h3>
                <div className={Style.Blogpart_categories_2div}>
                  <h6 className={Style.Blogpart_categories_2div_h3}>
                    Business
                  </h6>
                  <div className={Style.Blogpart_categories_div_numdiv}>
                    <h6 className={Style.Blogpart_categories_2div_h3_num}>
                      05
                    </h6>
                  </div>
                </div>
                <div className={Style.Blogpart_categories_2div}>
                  <h6 className={Style.Blogpart_categories_2div_h3}>
                    Introductions
                  </h6>
                  <div className={Style.Blogpart_categories_div_numdiv}>
                    <h6 className={Style.Blogpart_categories_2div_h3_num}>
                      15
                    </h6>
                  </div>
                </div>
                <div className={Style.Blogpart_categories_2div}>
                  <h6 className={Style.Blogpart_categories_2div_h3}>
                    Design Blog
                  </h6>
                  <div className={Style.Blogpart_categories_div_numdiv}>
                    <h6 className={Style.Blogpart_categories_2div_h3_num}>
                      65
                    </h6>
                  </div>
                </div>
                <div className={Style.Blogpart_categories_2div}>
                  <h6 className={Style.Blogpart_categories_2div_h3}>
                    UI/UX Design
                  </h6>
                  <div className={Style.Blogpart_categories_div_numdiv}>
                    <h6 className={Style.Blogpart_categories_2div_h3_num}>
                      08
                    </h6>
                  </div>
                </div>
                <div className={Style.Blogpart_categories_2div}>
                  <h6 className={Style.Blogpart_categories_2div_h3}>
                    App Development
                  </h6>
                  <div className={Style.Blogpart_categories_div_numdiv}>
                    <h6 className={Style.Blogpart_categories_2div_h3_num}>
                      16
                    </h6>
                  </div>
                </div>
              </div>
              <div className={Style.Blogpart_categories_div_secound}>
                <h3 className={Style.Blogpart_categories_div_secound_h3}>
                  Tags
                </h3>
                <div className={Style.Blogpart_categories_div_secound_div}>
                  <h6 className={Style.Blogpart_categories_div_secound_div_h6}>
                    Business
                  </h6>
                  <h6 className={Style.Blogpart_categories_div_secound_div_h61}>
                    Graphic Design
                  </h6>
                </div>
                <div className={Style.Blogpart_categories_div_secound_div}>
                  <h6 className={Style.Blogpart_categories_div_secound_div_h6}>
                    Technology
                  </h6>
                  <h6 className={Style.Blogpart_categories_div_secound_div_h61}>
                    App Development
                  </h6>
                </div>
                <div className={Style.Blogpart_categories_div_secound_div}>
                  <h6 className={Style.Blogpart_categories_div_secound_div_h6}>
                    Website Design
                  </h6>
                  <h6 className={Style.Blogpart_categories_div_secound_div_h61}>
                    Business Idea
                  </h6>
                </div>
              </div>
            </Col>

            <Col
              xl={{ span: 12, order: 2 }}
              lg={{ span: 12, order: 2 }}
              md={{ span: 12, order: 2 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
            >
              <div className={Style.secoundcontainer_div}>
                <div className={Style.secoundcontainer_div1}>
                  <div className={Style.secoundcontainer_div_num}>
                    <h3 className={Style.secoundcontainer_div_num_h3}>01</h3>
                  </div>
                  <div className={Style.secoundcontainer_div_num}>
                    <h3 className={Style.secoundcontainer_div_num_h3}>02</h3>
                  </div>
                  <div className={Style.secoundcontainer_div_num}>
                    <h3 className={Style.secoundcontainer_div_num_h3}>03</h3>
                  </div>
                  <div className={Style.secoundcontainer_div_num}>
                    <h3 className={Style.secoundcontainer_div_num_h3}>04</h3>
                  </div>
                  <div className={Style.secoundcontainer_div_num}>
                    <h3 className={Style.secoundcontainer_div_num_h3}>05</h3>
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

export default Blogpart;
