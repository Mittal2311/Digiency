import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Banner from "./Component/Banner/Banner";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="header_bg">
        {/* header start */}
        <Header />
        {/* header end */}

        {/* Banner start */}
        <div className="Banner">
          <Banner />
        </div>
        {/* Banner end */}
     
      </div>

        {/* footer start */}
      <div className="footer_color">
        <Footer />
      </div>
        {/* footer end */}

    </>
  );
};

export default Home;
