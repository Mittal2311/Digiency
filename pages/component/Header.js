import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <h1> Header section</h1> */}
      <div className="header_section">
        <div className="container">
          <div className="row">
            <div className="logo col-xl-2 col-lg-3 col-md-2 col-sm-3 col-3">
              <Link href="/">
                <a className="logo_img">
                  <img src="/logo.png" className="img-responsive" />
                </a>
              </Link>
            </div>
            <div className="mobile_icon_view col-sm-4 col-4">
              <Link href="/">
                <a className="mobileicon">
                  <img src="/Dark.png" />
                </a>
              </Link>
            </div>

            <div className="mobile_menu col-5">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="btnicon"
              >
                {!isOpen ? (
                  <svg
                    className="open"
                    width="24"
                    height="19"
                    viewBox="0 0 24 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="3" fill="#111111" />
                    <rect y="8" width="24" height="3" fill="#111111" />
                    <rect y="16" width="24" height="3" fill="#111111" />
                  </svg>
                ) : (
                  <div></div>
                )}
              </button>
              {isOpen ? (
                <div className="mobile_nav">
                  <nav className="mobile_nav">
                    <div
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <svg
                        className="close block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        width="24"
                        height="24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <Link href="/">
                      <a href="#">Home</a>
                    </Link>
                    <Link href="/">
                      <a href="#">About Us</a>
                    </Link>
                    <Link href="/">
                      <a href="#">Our Work</a>
                    </Link>
                    <Link href="/">
                      <a href="#">Clients</a>
                    </Link>
                    <Link href="/">
                      <a href="#">Our Blog</a>
                    </Link>
                    <Link href="/">
                      <a href="#">Contact Us</a>
                    </Link>
                  </nav>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="menu col-xl-9 col-lg-7 col-md-9">
              <nav className="navbar">
                <Link href="/">
                  <a href="#">Home</a>
                </Link>
                <Link href="/">
                  <a href="#">About Us</a>
                </Link>
                <Link href="/">
                  <a href="#">Our Work</a>
                </Link>
                <Link href="/">
                  <a href="#">Clients</a>
                </Link>
                <Link href="/">
                  <a href="#">Our Blog</a>
                </Link>
                <Link href="/">
                  <a href="#">Contact Us</a>
                </Link>
              </nav>
            </div>
            <div className="col-xl-1 col-lg-2 col-md-1">
              <Link href="/">
                <a className="headericon">
                  <img src="/Dark.png" />
                </a>
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
