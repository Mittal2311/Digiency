import React from "react";

const Footer = () => {
  return (
    <>
      {/* <h1>Footer section</h1> */}
      <div className="footer_section">
        <div className="container">
          <div className="row">
            <div className="footer_top d-flex">
              <div className="footer_cont colxl-3">
                <a href="#" className="footerlogo">
                  {" "}
                  <span>Digie</span>ncy
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                  laoreet libero dis eget maecenas bibendum.
                </p>
                <ul className="social_icon d-flex">
                  <li >
                    <a href="#" className="active">
                      <img src="/facebook.png" className="img-responsive" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/instagram.png" className="img-responsive" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/twitter.png" className="img-responsive" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/skype.png" className="img-responsive" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-xl-3">
                <h5>Company</h5>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Work</a>
                  </li>
                  <li>
                    <a href="#">Client</a>
                  </li>
                  <li>
                    <a href="#">Our Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact US</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3">
                <h5>Sevices</h5>
                <ul>
                  <li>
                    <a href="#">Graphic Design</a>
                  </li>
                  <li>
                    <a href="#">UI/UX Design</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">App Development</a>
                  </li>
                  <li>
                    <a href="#">Web Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3">
                <h5>Newsletter</h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget varius viverra in.
                </p>
                <form>
                <input id="newsletter1" type="text" class="form-control" placeholder="info@gmail.com" />
              <a className="sendbtn">
              <img src="/send.png" className="img-responsive" />
              </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
