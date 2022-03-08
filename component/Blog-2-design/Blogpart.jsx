import React, { useState } from "react";
import { Col, Container, Row, Image, Form, FormControl } from "react-bootstrap";
import Style from "../../styles/blog2design/blogpart.module.css";

const Blogpart = () => {
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
              <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Image
                    src="./Blog-img/Image.svg"
                    className={Style.Blogpart_First_img}
                  />
                  <div className={Style.Blogpart_img_row}>
                    <div className={Style.Blogpart_img_div}>
                      <Image
                        src="./blog-img/timer.svg"
                        className={Style.Blogpart_imgmain_div_img}
                      />
                      <p className={Style.Blogpart_imgmain_div_p}>
                        January 25, 2021
                      </p>
                    </div>

                    <div className={Style.Blogpart_img_div}>
                      <Image
                        src="./blog-img/person.svg"
                        className={Style.Blogpart_imgmain_div_img}
                      />
                      <p className={Style.Blogpart_imgmain_div_p}>
                        Cristofer Westervelt
                      </p>
                    </div>

                    <div className={Style.Blogpart_img_div}>
                      <Image
                        src="./blog-img/message-circle.svg"
                        className={Style.Blogpart_imgmain_div_img}
                      />
                      <p className={Style.Blogpart_imgmain_div_p}>10 Comment</p>
                    </div>
                  </div>
                  <h3 className={Style.Blogpart_h3}>
                    35 Stellar Graphic Design Blogs to Keep You Educated and
                    Inspired
                  </h3>
                  <h6 className={Style.Blogpart_h6}>
                    he Memphis Design movement is one of unlikeliest success
                    stories in the history of design. Like so many artistic
                    reactions, it began as an outlet for its creators, a way to
                    rail against and confound elite sensibilities. The result
                    was a style that was revolutionary in its time and whose
                    spirit is a continual source of inspiration to this day.
                  </h6>
                  <h6 className={Style.Blogpart_h6}>
                    As popular and influential as Memphis Design has been over
                    the years, it can sometimes get a bad rap. It is a loud,
                    colorful style that is hard to separate from its era. And
                    when implemented without care, it can make some design
                    projects feel antiquated. On the other hand, a good designer
                    can turn these sins into virtues: obnoxious retro becoming
                    lively nostalgia.
                  </h6>
                  <h6 className={Style.Blogpart_h6}>
                    Memphis Design is a 1980s design aesthetic characterized by
                    scattered, brightly colored shapes and lines. It typically
                    combines circles and triangles with black-and-white graphic
                    patterns such as polka dots and squiggly lines.
                  </h6>
                </Col>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Image
                    src="./Blog-img/Image (11).svg"
                    className={Style.Blogpart_First_img}
                  />

                  <h6 className={Style.Blogpart_h6}>
                    Imagine you’re at a party, and you’re bored. You’ve been
                    bored for a while—years, it feels like. You wonder how a
                    party, something that is supposed to be fun, can feel like
                    it’s draining the life out of your very soul. As you look
                    around the yawning faces of the guests, you realize it’s
                    going to take drastic measures to salvage any excitement out
                    of this long night. So you sneak a desperate gulp of your
                    drink, slip on your tinted sunglasses and leap atop of the
                    sofa. You’ve sacrificed yourself to karaoke.
                  </h6>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <Image
                    src="./Blog-img/Image (12).svg"
                    className={Style.Blogpart_First_img}
                  />

                  <h6 className={Style.Blogpart_h6}>
                    The birth of Memphis Design was a lot like this, starting
                    with a gathering of architects and industrial designers in
                    Milan, Italy in 1981. But it wasn’t the party that bored the
                    guests. It was the general state of design—how creativity
                    had stagnated to become corporate and uniform.
                  </h6>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <Image
                    src="./Blog-img/Image (13).svg"
                    className={Style.Blogpart_First_img}
                  />

                  <h6 className={Style.Blogpart_h6}>
                    Long before all this, there had been a number of fine art
                    and design movements that precipitated Memphis Design, and
                    these were likely on the guests’ minds as they traced where
                    it all had gone wrong. Kadinsky composition On White
                    Kadinsky’s work also likely inspired the Memphis design
                    movement.
                  </h6>
                </Col>
              </Row>
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
              xl={{ span: 8, order: 2 }}
              lg={{ span: 8, order: 2 }}
              md={{ span: 8, order: 2 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
            
            >
              <div className={Style.secoundcontainer_div}>
                <div className={Style.secoundcontainer_div1}>
                  <Image
                    src="./Blog-img/Profile.svg"
                    className={Style.secoundcontainer_div_img}
                  />
                  <div className={Style.secoundcontainer_div2}>
                    <h5 className={Style.secoundcontainer_div2_h5}>
                      Cristofer Westervelt
                    </h5>
                    <h6 className={Style.secoundcontainer_div2_h6}>
                      Graphic Design
                    </h6>
                    <p className={Style.secoundcontainer_div2_p}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tempor porttitor est amet, volutpat augue a sodales nec,
                      vitae. Pulvinar vitae eu sed elit vitae.
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

export default Blogpart;
