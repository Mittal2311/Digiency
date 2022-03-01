import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Content from "../components/content";
import Sidebar from "../components/sidebar";
import Categories from "../components/categories";
import Tags from "../components/tags";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";

import contentJson from "../json/contentJson.json";
import sidebarJson from "../json/sidebarJson.json";
import categoriesJson from "../json/categoriesJson.json";
import tagsJson from "../json/tagsJson.json";

const Home = () => {
  const [contentData] = useState(contentJson);
  const [sidebarData] = useState(sidebarJson);
  const [categoriesData] = useState(categoriesJson);
  const [tagsData] = useState(tagsJson);

  return (
    <>
      {/*********  Header **********/}
      <Header />

      {/********* Content *********/}
      <Container className="content">
        <Row>
          <Col xl={8} lg={8} className="mb-5 ">
            {contentData.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <Content data={item} />
            ))}
            <Col xl={12} className="page_numbers d-flex justify-content-center">
              <p>01</p>
              <p>02</p>
              <p>03</p>
              <p>04</p>
              <p>05</p>
            </Col>
          </Col>

          {/********* Sidebar *********/}
          <Col xl={4} lg={4} className="mb-5 mt-5 ">
            <div className="mb-1">
              <InputGroup className="mb-5 search">
                <FormControl placeholder="Search here..." />
                <InputGroup.Text className="search_img">
                  <img src="/search.png" alt="search" />
                </InputGroup.Text>
              </InputGroup>
            </div>

            {/********* Sidebar_Card-1 *********/}
            <Card className="Latest_Post">
              <h1>Latest Post</h1>

              {sidebarData.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Sidebar data={item} />
              ))}
            </Card>

            {/********* Sidebar_Card-2 *********/}
            <Card className="Categories">
              <h1>Categories</h1>

              {categoriesData.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Categories data={item} />
              ))}
            </Card>

            {/********* Sidebar_Card-3 *********/}
            <Card className="Tags">
              <h1>Tags</h1>
              <Row>
                {tagsData.map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <Tags data={item} />
                ))}
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      {/************ Footer *************/}
      <Footer />
    </>
  );
};

export default Home;
