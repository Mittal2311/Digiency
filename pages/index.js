import React, { useState } from "react";
import Footer from "./components/footer";
import Navv from "./components/header";
import Content from "./components/content";
import Sidebar from "./components/sidebar";
import Categories from "./components/categories";
import Tags from "./components/tags";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";
import contentJson from "./json/contentJson.json";
import sidebarJson from "./json/sidebarJson.json";
import categoriesJson from "./json/categoriesJson.json";

import tagsJson from "./json/tagsJson.json";

const Home = () => {
  const [contentData] = useState(contentJson);
  const [sidebarData] = useState(sidebarJson);
  const [categoriesData] = useState(categoriesJson);
  const [tagsData] = useState(tagsJson);

  return (
    <>
      <Navv />

      <Container className="cont_3">
        <Row>
          <Col xl={8} lg={8} className="mb-5 ">
            {contentData.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <Content data={item} />
            ))}
          </Col>

          <Col xl={4} lg={4} className="mb-5 mt-5 ">
            <div className="mb-1">
              <InputGroup className="mb-5 search">
                <FormControl placeholder="Search here..." />
                <InputGroup.Text className="search_img">
                  <img src="/search.png" alt="search" />
                </InputGroup.Text>
              </InputGroup>
            </div>

            <Card className="card_title_1">
              <h1>Latest Post</h1>

              {sidebarData.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Sidebar data={item} />
              ))}
            </Card>

            <Card className="card_title_2">
              <h1>Categories</h1>

              {categoriesData.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Categories data={item} />
              ))}
            </Card>

            <Card className="card_title_3 ">
              <h1>Tags</h1>

              {tagsData.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Tags data={item} />
              ))}
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
