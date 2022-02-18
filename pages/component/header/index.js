/* eslint-disable @next/next/link-passhref */
import React,{useState} from "react";
import Link from "next/link";

const Header = () => {
  const [main, setMain] = useState(false);
  return (
    <div>
       <div className="container">
      <div className="header_section">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 logo">
            <Link href="/">
              <a>
                <img src="Digiency.png" className="digiency_img" />
              </a>
            </Link>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-6 nav_header"> 
            <div className="collaps navbar-collapse" id="mynavbar">
              <nav className="navbar">
                <Link href="#">
                  <a className="Home ">Home</a>
                </Link>
                <Link href="#">
                  <a className="About_us">About us</a>
                </Link>
                <Link href="#">
                  <a className="Services">Services</a>
                </Link>
                <Link href="#">
                  <a className="Portfolio">Portfolio</a>
                </Link>
                <Link href="#">
                  <a className="Blog">Blog</a>
                </Link>
                <Link href="#">
                  <a className="Contact_Us">Contact Us</a>
                </Link>
                <Link href="/">
                  <a>
                    <button className="btn_talk"><a>Lets Talk</a></button>
                  </a>
                </Link>
              </nav>
              <a onClick={() => setMain(!main)} className="hamburger">
              {!main ? (
                <img src="Hamburger.png" className="hamburger" />
              ) : (
                <a> </a>
              )}
            </a>
            </div>
            {main ? (
            <div className="menuview">
              <div onClick={() => setMain(false)}>
                <img src="/close.svg" className="close" />
              </div>
              <Link href="#">
                  <a>Home</a>
                </Link>
                <Link href="#">
                  <a>About us</a>
                </Link>
                <Link href="#">
                  <a>Services</a>
                </Link>
                <Link href="#">
                  <a>Portfolio</a>
                </Link>
                <Link href="#">
                  <a>Blog</a>
                </Link>
                <Link href="#">
                  <a>Contact Us</a>
                </Link>
            </div>
          ) : (
            <div></div>
          )}
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Header;
