// import React from "react";
// import { useState } from "react";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   const click = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <div className="header mt-4">
//         <div className="container">
//           <div className="row">
//             {/* section-1 */}
//             <div className="seg-one col-xl-2 col-md-2 col-sm-3 col-4">
//               <img src="Digiency.png" alt="logo" />
//             </div>

//             {/* section-2 */}
//             <div className="seg-two col-xl-8 col-md-9 col-sm-3 col-1">
//               <ul className="d-flex justify-content-between mt-1">
//                 <li>
//                   <a href="#">Home</a>
//                 </li>
//                 <li>
//                   <a href="#">About Us</a>
//                 </li>
//                 <li>
//                   <a href="#">Our Work</a>
//                 </li>
//                 <li>
//                   <a href="#">Clients</a>
//                 </li>
//                 <li>
//                   <a href="#">Our Blog</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact Us</a>
//                 </li>
//               </ul>
//             </div>

//             {/* section-3 */}
//             <div className="seg-three col-xl-2 col-md-1 col-sm-5 col-5">
//               <img src="base.png" alt="base" />
//             </div>

//             <div className="toogle col-sm-1 col-2 mt-1">
//               <button onClick={click} className="btn">
//                 {open ? (
//                   <div className="onclick" style={{ position: "absolute" }}>
//                     <ul className="mobile_menu mt-5 ">
//                       <li>
//                         <a href="#">Home</a>
//                       </li>
//                       <li>
//                         <a href="#">About Us</a>
//                       </li>
//                       <li>
//                         <a href="#">Our Work</a>
//                       </li>
//                       <li>
//                         <a href="#">Clients</a>
//                       </li>
//                       <li>
//                         <a href="#">Our Blog</a>
//                       </li>
//                       <li>
//                         <a href="#">Contact Us</a>
//                       </li>
//                     </ul>
//                   </div>
//                 ) : (
//                   <div></div>
//                 )}
//                 <img src="menu1.png" alt="icon" height={35} width={30} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import React from "react";
import {
  Navbar,
  Container,
  Row,
  NavbarBrand,
  Nav,
  Col,
  Offcanvas,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const Header = () => {
  return (
    <>
      <Container>
        <Row>
          <Navbar className="header" sticky="top" expand="lg" variant="dark">
            <NavbarBrand className="header-image">
              <img src="/Digiency.png" alt="Digiency"></img>
            </NavbarBrand>

            <Col
              xl={{ order: "last" }}
              lg={{ order: "last" }}
              md={{ order: "second" }}
              className="mode"
            >
              <img className="dark_mode" src="/base.png" alt="mode"></img>
            </Col>

            <Navbar.Toggle id="toggle_menu" />

            <NavbarCollapse id="navbar-collapse">
              <Nav className="nav">
                <Nav.Link className="nav-link text-end" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-link text-end" href="#about">
                  About Us
                </Nav.Link>
                <Nav.Link className="nav-link text-end" href="#work">
                  Our Work
                </Nav.Link>
                <Nav.Link className="nav-link text-end" href="#clients">
                  Clients
                </Nav.Link>
                <Nav.Link className="nav-link text-end" href="#blog">
                  Our Blog
                </Nav.Link>
                <Nav.Link className="nav-link text-end" href="#contact">
                  Contact Us
                </Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>
        </Row>
      </Container>

      <Container fluid xl={12} lg={12} md={12} sm={12} className="Blog_Post">
        <Row>
          <h1>Our Blog</h1>
          <h6>Home - Blog Page</h6>
        </Row>
      </Container>
    </>
  );
};

export default Header;
