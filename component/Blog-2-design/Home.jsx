import React from "react";
import { Container } from "react-bootstrap";
import Style from "../../styles/blog2design/home.module.css";

const Home = () => {
  return (
    <>
      <div className={Style.Bloghomepage}>
        <Container className={Style.Bloghomepage_container}>
          <h1 className={Style.Bloghomepage_h1}>
            35 Stellar Graphic Design Blogs to Keep You Educated and Inspired
          </h1>
          <h6 className={Style.Bloghomepage_h6}>
            Home - Blog Page - Graphic Design
          </h6>
        </Container>
      </div>
    </>
  );
};

export default Home;
