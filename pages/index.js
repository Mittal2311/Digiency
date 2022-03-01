/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Blogdetail from "../component/blogdetail";
import sidebar from "../json/sidebar.json";
import Sidebar from "../component/sidebar";
import category from "../json/category.json";
import Catogories from "../component/catogories";
import tag from '../json/tag.json';
import Tags from '../component/tags';
import Comment from '../component/comment';
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Image from "next/image";
const Home = () => {
  const [sidebardata] = useState(sidebar);
  const [catogoriesdata] = useState(category);
  const [tagdata] = useState(tag)
  return (
    <>
      <Header />
      
      <Container>
        <Row>
          <Col xl={8} lg={7} md={6} className=" blog-detail mt-5">
            <Blogdetail /> 
            </Col>
            <Col xl={8} lg={7} md={7} xs={{order:'last'}} className="mt-4">
              <Comment/>
            </Col>
          <Col xl={4} lg={5} md={6} sm={12} xs={12} className="latestpost mt-5">
            <InputGroup className="searchbox">
              <FormControl placeholder="Search Here" />
              <InputGroup.Text id="basic-addon3">
                <Image
                  src="/search.png"
                  alt="search"
                  height={20}
                  width={20}
                ></Image>
              </InputGroup.Text>
            </InputGroup>
            <Card
              className="latestpost-card1"
              style={{marginTop: "40px" }}
            >
              <h3 className="latest-post">Latest Post</h3>
              {
                // eslint-disable-next-line react/jsx-key
                sidebardata.map((item) => (<Sidebar val={item} />
                ))
              }
            </Card>

            <Card className="catagories mt-5">
            <h6 className="category-title">Catogories</h6>
              {
                // eslint-disable-next-line react/jsx-key
                catogoriesdata.map((item) => (<Catogories val={item} />
                ))
              }
            </Card>

            <Card className="tags">
              <h6 className="tag-h6">Tags</h6>
              <Row>
              {
               tagdata.map((item)=>(<Tags val={item}/>
               ))
              }
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Home;
