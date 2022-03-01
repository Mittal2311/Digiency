import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Banner from "./Component/Banner/Banner";
import { Container } from "react-bootstrap";
import Services from "./Component/Services/Services";
import AboutUs from "./Component/Aboutus/aboutUs";
import CaseStudy from "./Component/Casestudy/CaseStudy";
import Testimonial from "./testmonial/Testimonial";
import Capabilities from "./Component/Capabilities/Capabilities";
import Test from "./testmonial/carousel";
import Blog from "./Component/Blog/Blog";
import Subscribe from "./Component/subscribe/subscribe";
import Carosolslider from "./testmonial/Carosolslider";

const Home = () => {
  return (
    <>
      {/* .....................Header............................ */}
      <div className="header_bg">
        <Header />
        <div className="Banner">
          <Banner />
        </div>
      </div>
      {/* ........................Services card......................... */}
      <div>
        <Services />
      </div>
      {/* ..........................AboutUS....................... */}
      <div className="about_bg">
        <AboutUs />
      </div>
      {/* ..........................caseStudy....................... */}
      <div>
        <CaseStudy />
      </div>
      {/* ..........................testimonial....................... */}
      <div className="testimonial_bg">
        <Testimonial />
     
       {/* <Test /> */}

      </div>
      {/* .....................Capabilities.......................... */}
      <div className="Banner">
      <Capabilities />
      </div>
      {/* ..........................Blog....................... */}
      <div className="blog_bg">
       <Blog />
      </div>

      <div className="Banner">
      <Subscribe />
      </div>

      {/* ..........................footer....................... */}
      <div className="footer_color">
        <Footer />
      </div>

    </>
  );
};

export default Home;
