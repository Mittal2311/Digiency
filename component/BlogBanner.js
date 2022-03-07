import React from "react";
import { Container } from "react-bootstrap";
import bannerstyale from "../styles/Blogbanner.module.css";

const BlogBanner = () => {
  return (
    <>
      <div className={bannerstyale.blogbanner_section}>
        <Container>
          <div className={bannerstyale.blogbanner_cont}>
            <h1 className={bannerstyale.blog_heading}> Our Blog</h1>
            <span className={bannerstyale.blog_title}>Home - Blog Page </span>
          </div>
        </Container>
      </div>
    </>
  );
};
export default BlogBanner;
