import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "../component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Banner from "../Component/Banner/Banner";

import Services from "../Component/Services/Services";
import AboutUs from "../Component/Aboutus/aboutUs";
import CaseStudy from "../Component/Casestudy/CaseStudy";

import Capabilities from "../Component/Capabilities/Capabilities";
import Blog from "../Component/Blog/Blog";
import Subscribe from "../Component/subscribe/subscribe";
import Testimonial from "../Component/testmonial/Testimonial";




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
