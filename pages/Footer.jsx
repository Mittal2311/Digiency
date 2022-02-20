const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid footer_bg">
          <div className="container footer_container">
            <div className="d-flex">
              <div className="footer_firstdiv">
                <img src="/LOGO.png"  className="logo"/>
                <p>
                  Lorem ipsum sit amet, consectetur adipiscing ellit ,Sit a
                  laoreet libero dis edge naecena bibendum
                </p>
                <div className="social-icons">
                  <div className="img1 ">
                    <img src="/fb.png" className=" bg1" />
                    <img src="/insta.png" className="bg2" />
                    <img src="/tweet.png" className="bg2" />
                    <img src="/sky.png" className="bg2" />
                  </div>
                </div>
              </div>
              <div className="footer_secounddiv">
                <div>
                  <img src="/Company.png" />
                  <ul>
                    <li>About Us</li>
                    <li>Our Clients</li>
                    <li>Clients</li>
                    <li>Our Blog</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="footer_thirddiv">
                <div>
                  <img src="/Sevices.png" />
                  <ul>
                    <li>Graphic Design</li>
                    <li>Ul/Ux Design</li>
                    <li>Web Development</li>
                    <li>App Development</li>
                    <li>web Hosting</li>
                  </ul>
                </div>
              </div>
              <div className="footer_fourthdiv">
                <div>
                  <img src="/Newsletter.png" />
                  <p>
                    Lorem ipsum sit amet, consectetur adipiscing ellit ,Sit a
                    laoreet libero dis edge naecena bibendum
                  </p>
                  <input type="text" palceholder="info@gmail.com" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid last_bg">
          <div className="container">
              <p>© Copyright 2022. All Right Reserved By Ojjomedia </p>
              <img src="/Arrow.png"/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
