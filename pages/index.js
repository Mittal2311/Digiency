import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import Aboutus from "./component/Aboutus";
import Ourexpereince from "./component/Ourexpereince";
import Team from "./component/Team";
import Teamjson from "./json/team.json";
import { Container } from "react-bootstrap";
import Ourwork from "./component/Ourwork";
import Ex from ".//component/Ex";
import Client from "./component/Client";


export default function Home() {
 const [teamData] = useState(Teamjson);
  return (
    <>
      {/* Header section start  */}
      <Header />
      {/* Header section end  */}

      {/* Banner section start  */}
        <Banner/>
      {/* Banner section end */}

      {/* About section start  */}
        <Aboutus/>
      {/* About section end  */}

      {/* Ourexpereince section satrt  */}
        <Ourexpereince />
      {/* Ourexpereince section end  */}

      {/* Team section start  */}
      <div className="team_section">
      <Container>
      <div className="team_title text-center mb-5">
            <h5>Team Member</h5>
            <h4>
              We Have <span>Some Awesome</span> People
            </h4>
          </div>
          {/* {teamData.map((item) => (
              <Team data={item} />
            ))} */}

            <Team/>
      </Container>
      </div>
      {/* <Team/> */}
      {/* Team section end  */}

      {/* Our Work section start  */}
        <Ourwork/>
      {/* Our Work section end  */}

      {/* Client feedback section satrt  */}

      <Client/>
      {/* Client feedback section end  */}

      {/* footer section satrt  */}
        <Footer />
      {/* footer section end  */}
    </>
  );
}
