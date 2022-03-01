import {
  Col,
  Container,
  InputGroup,
  FormControl,
  Row,
  Dropdown,
} from "react-bootstrap";
import Image from "next/image";
const Comment = () => {
  return (
    <Container>
      <Col xl={12} className="comment d-flex mt-5">
        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
          <h6 className="com1">3 Comments</h6>
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
      </Col>
      <Col className="ml">
        <view className="line2"></view>
      </Col>
      <Row>
        <Col xl={12} className=" ht mt-2 d-flex ">
          <Col xl={1} lg={1} md={1} sm={1} xs={1} className="heart mt-2">
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
            className=" recommended justify-content-start mt-2"
          >
            <h6>Recommend</h6>
          </Col>

          <Col xl={6} lg={6} md={6} sm={6} xs={6} className="dropdown mt-1">
            <Dropdown>
              <Dropdown.Toggle id="drop">Sort By Best</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Col>
        <Col xl={12} className="mt-4">
          <InputGroup className="input1">
            <FormControl />
          </InputGroup>
        </Col>

        {/* rubren vetsrow  profile 1*/}
        <Col xl={12} className="d-flex mt-4 profile1">
          <Col xl={2} lg={2} md={4} sm={3} xs={4}>
            <Image
              src="/prof1.png"
              alt="profile1"
              height={80}
              width={80}
            ></Image>
          </Col>

          <Col xl={10} lg={10} md={12} sm={9} xs={8} className=" robot">
            <h6>Robot Vester</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
            </p>
          </Col>
        </Col>

        {/* Alfonso philips  profile 2*/}

        <Col xl={12} className="d-flex mt-4 profile2">
          <Col xl={2} lg={2} md={3} sm={2} xs={2}></Col>

          <Col
            xl={10}
            lg={10}
            md={11}
            sm={10}
            xs={10}
            className=" robot d-flex"
          >
            <Col xl={2} lg={2} md={4} sm={3} xs={4}>
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
        </Col>

        {/*cooper herwitz  profile 3*/}

        <Col xl={12} xs={{ order: "last" }} className="d-flex mt-4 profile3">
          <Col xl={2} lg={2} md={3} sm={2} xs={3}></Col>

          <Col
            xl={10}
            lg={10}
            md={11}
            sm={10}
            xs={10}
            className=" robot d-flex"
          >
            <Col xl={2} lg={2} md={4} sm={3} xs={4}>
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
      </Row>
    </Container>
  );
};
export default Comment;
