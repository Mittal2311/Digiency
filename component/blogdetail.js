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
              <img className="clock" src="/clock.png" alt="clock"></img>
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
            <p className="blogpara1">
              The Memphis Design movement is one of unlikeliest success stories
              in the history of design. Like so many artistic reactions, it
              began as an outlet for its creators, a way to rail against and
              confound elite sensibilities. The result was a style that was
              revolutionary in its time and whose spirit is a continual source
              of inspiration to this day.
            </p>
          </Col>

          <Col xl={12} lg={12} md={12}>
            <p className="blogpara2">
              As popular and influential as Memphis Design has been over the
              years, it can sometimes get a bad rap. It is a loud, colorful
              style that is hard to separate from its era. And when implemented
              without care, it can make some design projects feel antiquated. On
              the other hand, a good designer can turn these sins into virtues:
              obnoxious retro becoming lively nostalgia.
            </p>
          </Col>

          <Col xl={12} lg={12} md={12}>
            <p className="blogpara2">
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
          <h6 className="blogpara4 mt-2">
            Imagine youre at a party, and youre bored. Youve been bored for a
            while—years, it feels like. You wonder how a party, something that
            is supposed to be fun, can feel like its draining the life out of
            your very soul. As you look around the yawning faces of the guests,
            you realize its going to take drastic measures to salvage any
            exciteme
          </h6>
        </Row>

        <Row>
          <Col xl={6} lg={6} md={12} className="pencilart mt-5">
            <Image
              className="pen"
              src="/pencil.png"
              alt="pencil"
              height={300}
              width={500}
            ></Image>
            <Col xl={12} lg={12} md={12} className="mt-2">
              <p className="blogpara5">
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
              
              src="/art1.png"
              alt="art1"
              height={300}
              width={500}
            ></Image>
            <Col xl={12} lg={12} md={12} className="mt-2">
              <p className="blogpara5">
                The birth of Memphis Design was a lot like this, starting with a
                gathering of architects and industrial designers in Milan, Italy
                in 1981. But it wasnt the party that bored the guests. It was
                the general state of design—how creativity had stagnated to
                become corporate and uniform.
              </p>
            </Col>
          </Col>
          <Col xl={12} className="profile mt-5 d-flex">
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

            <Col xl={10} lg={9} md={9} sm={9} xs={9} className=" profilename ">
              <h5>Cristofer Westervelt</h5>
              <h6>Graphic Design</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                porttitor est amet, volutpat augue a sodales nec, vitae.
                Pulvinar vitae eu sed elit vitae.
              </p>
            </Col>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default Blogdetail;
