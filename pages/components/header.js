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

// export default Header;

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
import NavbarToggle from "react-bootstrap/NavbarToggle";

const Navv = () => {
  return (
    <>
      <Container>
        <Row>
          <Navbar
            className="app"
            fixed="top"
            sticky="top"
            expand="lg"
            variant="dark"
          >
            <NavbarBrand>
              <img src="/Digiency.png" alt="logo" height={40} width={120}></img>
            </NavbarBrand>

            <NavbarToggle
              className="toggle_menu"
              style={{ color: "black", background: "black" }}
            />

            <NavbarCollapse
              style={{
                fontFamily: "Work Sans",
              }}
            >
              <Nav style={{ marginLeft: "30px" }}>
                <Nav.Link
                  className="text-center"
                  href="#home"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginLeft: "18px",
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="text-center"
                  href="#about"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginLeft: "18px",
                  }}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  className="text-center"
                  href="#work"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginLeft: "18px",
                  }}
                >
                  Our Work
                </Nav.Link>
                <Nav.Link
                  className="text-center"
                  href="#clients"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginLeft: "18px",
                  }}
                >
                  Clients
                </Nav.Link>
                <Nav.Link
                  className="text-center"
                  href="#blog"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginLeft: "18px",
                  }}
                >
                  Our Blog
                </Nav.Link>
                <Nav.Link
                  className="text-center"
                  href="#contact"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginLeft: "18px",
                  }}
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </NavbarCollapse>

            <NavbarBrand>
              <img
                className="base"
                src="/base.png"
                alt="logo"
                height={20}
                width={20}
              ></img>
            </NavbarBrand>
          </Navbar>
        </Row>
      </Container>

      {/* <Navbar expand={false}>
        <Container>
          <Navbar.Brand>
            <img src="/Digiency.png" alt="logo" height={40} width={120}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
                <Nav.Link href="#action3">Our Work</Nav.Link>
                <Nav.Link href="#action4">Clients</Nav.Link>
                <Nav.Link href="#action5">Our Blog</Nav.Link>
                <Nav.Link href="#action6">Contact Us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}

      <Container fluid xl={12} lg={12} md={12} sm={12} className="cont_2">
        <Row>
          <h1>Our Blog</h1>
          <h6>Home - Blog Page</h6>
        </Row>
      </Container>
    </>
  );
};

export default Navv;
