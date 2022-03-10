import React from "react";
import { Container } from "react-bootstrap";
import Style from "../../styles/blogdesign/bloghomepage.module.css";

export const Bloghomepage = () => {
  return (
    <div className={Style.Bloghomepage}>
      <Container className={Style.Bloghomepage_container}>
        <h1 className={Style.Bloghomepage_h1}>Our Blog</h1>
        <h6 className={Style.Bloghomepage_h6}>Home - Blog Page</h6>
      </Container>
    </div>
  );
};
