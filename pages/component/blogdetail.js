import { Container, Row, Col, NavLink } from "react-bootstrap";
import Image from "next/image";
const Blogdetail = () => {
  return (
    <Container>
      <Row>
        <Col xl={12} className=" blog1">
          <Image
            className="blog-image"
            src="/laptop.png"
            alt="laptop"
            height={400}
            width={770}
          ></Image>
        </Col>

        {/* blog detail pages */}

        <Row>
          <Col xl={4} lg={6} md={6} sm={6} xs={6} className=" d-flex ">
            <NavLink>
              <img
                className="clock"
                src="/clock.png"
                alt="clock"
                // height={20}
                // width={20}
              ></img>
            </NavLink>
            <h6 className="clk-h6">January 25,2021</h6>
          </Col>

          <Col xl={4} lg={6} md={6} sm={6} xs={6} className=" d-flex">
            <NavLink>
              <img src="/user.png" alt="clock" className="user"></img>
            </NavLink>
            <h6 className="user-h6"> Cristofer Westervet</h6>
          </Col>

          <Col xl={4} lg={12} md={12} className="d-flex">
            <NavLink>
              <img src="/comment.png" alt="clock" className="coment"></img>
            </NavLink>
            <h6 className="comment-h6">10 Comments</h6>
          </Col>
        </Row>

        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-3">
            <p className="para1">
              The Memphis Design movement is one of unlikeliest success stories
              in the history of design. Like so many artistic reactions, it
              began as an outlet for its creators, a way to rail against and
              confound elite sensibilities. The result was a style that was
              revolutionary in its time and whose spirit is a continual source
              of inspiration to this day.
            </p>
          </Col>

          <Col xl={12} lg={12} md={12}>
            <p className="para2">
              As popular and influential as Memphis Design has been over the
              years, it can sometimes get a bad rap. It is a loud, colorful
              style that is hard to separate from its era. And when implemented
              without care, it can make some design projects feel antiquated. On
              the other hand, a good designer can turn these sins into virtues:
              obnoxious retro becoming lively nostalgia.
            </p>
          </Col>

          <Col xl={12} lg={12} md={12}>
            <p className="para2">
              Memphis Design is a 1980s design aesthetic characterized by
              scattered, brightly colored shapes and lines. It typically
              combines circles and triangles with black-and-white graphic
              patterns such as polka dots and squiggly lines.
            </p>
          </Col>
        </Row>

        {/* blog detail 2 */}
        <Row>
          <Col xl={12} lg={12} md={12} className="mt-4">
            <Image src="/art.png" alt="art" height={400} width={770}></Image>
          </Col>
          <h6 className="para4 mt-2">
            Imagine youre at a party, and youre bored. Youve been bored for a
            while—years, it feels like. You wonder how a party, something that
            is supposed to be fun, can feel like its draining the life out of
            your very soul. As you look around the yawning faces of the guests,
            you realize its going to take drastic measures to salvage any
            exciteme
          </h6>
        </Row>

        <Row>
          <Col xl={6} lg={6} md={12} className=" pencil mt-5">
            <Image
              className="pen"
              src="/pencil.png"
              alt="pencil"
              height={300}
              width={500}
            ></Image>
            <Col xl={12} lg={12} md={12} className="mt-2">
              <p>
                The birth of Memphis Design was a lot like this, starting with a
                gathering of architects and industrial designers in Milan, Italy
                in 1981. But it wasnt the party that bored the guests. It was
                the general state of design—how creativity had stagnated to
                become corporate and uniform.
              </p>
            </Col>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} className=" art1 mt-5">
            <Image
              // className="art1"
              src="/art1.png"
              alt="art1"
              height={300}
              width={500}
            ></Image>
            <Col xl={12} lg={12} md={12} className="mt-2">
              <p>
                The birth of Memphis Design was a lot like this, starting with a
                gathering of architects and industrial designers in Milan, Italy
                in 1981. But it wasnt the party that bored the guests. It was
                the general state of design—how creativity had stagnated to
                become corporate and uniform.
              </p>
            </Col>
          </Col>
          <Col xl={12} className=" mainprofile mt-5 d-flex">
            <Col
              xl={2}
              lg={3}
              md={3}
              sm={3}
              xs={3}
              className=" justify-content-around"
            >
              <Image
                src="/profile.png"
                alt="profile"
                height={100}
                width={100}
              ></Image>
            </Col>

            <Col xl={10} lg={9} md={9} sm={9} xs={9} className=" profiletext ">
              <h5>Cristofer Westervelt</h5>
              <h6>Graphic Design</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                porttitor est amet, volutpat augue a sodales nec, vitae.
                Pulvinar vitae eu sed elit vitae.
              </p>
            </Col>
          </Col>

          {/* 
          <Col xl={12} className="comment d-flex mt-5">
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <h6>3 Comments</h6>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4} className="disque ">
              <h6>Disque</h6>
            </Col>
            <Col
              xl={2}
              lg={2}
              md={2}
              sm={2}
              xs={2}
              className="gwen d-flex justify-content-end"
            >
              <Image
                className="commentimage"
                src="/comment1.png"
                alt="comment1"
                height={20}
                width={20}
              ></Image>
            </Col>
            <Col xl={2} lg={2} md={2} sm={2} xs={2} className="disque ">
              <h6>Gwen</h6>
            </Col>
          </Col> */}

          {/* <Col className="ml">
            <view className="line2"></view>
          </Col> */}
          {/* <Row>
            <Col xl={12} className=" ht mt-2 d-flex ">
              <Col xl={1} lg={1} md={1} sm={1} xs={1} className="heart mt-auto">
                <Image
                  className="ht1"
                  src="/ht1.png"
                  alt="heart"
                  height={20}
                  width={20}
                ></Image>
              </Col>
              <Col
                xl={5}
                lg={5}
                md={5}
                sm={5}
                xs={5}
                className=" recommended justify-content-start mt-auto"
              >
                <h6>Recommend</h6>
              </Col>

              <Col
                xl={6}
                lg={6}
                md={6}
                sm={7}
                xs={6}
                className="dropdown mt-auto"
              >
                <Dropdown>
                  <Dropdown.Toggle id="drop">Sort By Best</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Col>
            <Col xl={12} className="mt-5">
              <InputGroup className="input1">
                <FormControl />
              </InputGroup>
            </Col>

            rubren vetsrow  profile 1
            <Col xl={12} className="d-flex mt-4 profile1">
              <Col xl={2} lg={2} md={4} sm={3} xs={5}>
                <Image
                  src="/prof1.png"
                  alt="profile1"
                  height={80}
                  width={80}
                ></Image>
              </Col>

              <Col xl={10} lg={10} md={12} sm={9} xs={7} className=" robot">
                <h6>Robot Vester</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                </p>
              </Col>
            </Col>

            {/* Alfonso philips  profile 2*/}

          {/* <Col xl={12} className="d-flex mt-4 profile2">
              <Col xl={2} lg={2} md={3} sm={2} xs={2}></Col>

              <Col
                xl={10}
                lg={10}
                md={11}
                sm={10}
                xs={10}
                className=" robot d-flex"
              >
                <Col xl={2} lg={2} md={4} sm={3} xs={6}>
                  <Image
                    src="/prof2.png"
                    alt="profile2"
                    height={70}
                    width={70}
                  ></Image>
                </Col>

                <Col xl={10} lg={10} md={9} sm={9} xs={8}>
                  <h6>Alfonso Philips</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                  </p>
                </Col>
              </Col>
            </Col> */}

          {/*cooper herwitz  profile 3*/}
          {/* 
            <Col xl={12} xs={{order:"last"}} className="d-flex mt-4 profile3">
              <Col xl={2} lg={2} md={3} sm={2} xs={2}></Col>

              <Col
                xl={10}
                lg={10}
                md={11}
                sm={10}
                xs={10}
                className=" robot d-flex"
              >
                <Col xl={2} lg={2} md={4} sm={3} xs={6}>
                  <Image
                    src="/profile3.png"
                    alt="profile3"
                    height={70}
                    width={70}
                  ></Image>
                </Col>

                <Col xl={10} lg={10} md={9} sm={9} xs={8}>
                  <h6>Cooper Herwitz</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                  </p>
                </Col>
              </Col>
            </Col>
          </Row> */}
        </Row>
      </Row>
    </Container>
  );
};
export default Blogdetail;
