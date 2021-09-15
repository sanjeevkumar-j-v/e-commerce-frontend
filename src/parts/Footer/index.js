import React from "react";

function Footer(props) {
  return (
    <footer id="footer" class="footer pt-100 pb-70">
      <div class="footer-shape">
        <img src="/img/footer/footer-left.svg" alt="" class="shape shape-1" />
        <img src="/img/footer/footer-right.svg" alt="" class="shape shape-2" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
              <div class="logo">
                <a href="/">
                  <img src="/assets/img/stlogo.svg" alt="Logo" />
                </a>
              </div>
              {/* <div class="download-btns">
                <a href="javascript:void(0)">
                  <span class="icon">
                    <i class="lni lni-play-store"></i>
                  </span>
                  <span class="text">
                    GET IT ON <b>Play Store</b>{" "}
                  </span>
                </a>
              </div> */}
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".4s">
              <h3>About Us</h3>
              <ul class="links">
                <li>
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Services</a>
                </li>
                <li>
                  <a href="javascript:void(0)">About Us</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".6s">
              <h3>About</h3>
              <ul class="links">
                <li>
                  <a href="javascript:void(0)">Partners</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Terms of Service</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Privacy Policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".8s">
              <h3>Contact</h3>
              <ul class="links">
                <li>
                  <a>KavisCooknbake</a>
                </li>
                <li>
                  <a>32, Famous Apartments, Namakkal.</a>
                </li>
                <li>
                  <a>Tamil Nadu</a>
                </li>
                <li>
                  <a>9626244242</a>
                </li>
              </ul>
            </div>
          </div>
          <p>
            Designed and Developed by
            <a
              href="https://sanjeevkumar-j-v.github.io"
              rel="nofollow"
              target="_blank"
            >
              Sanjeev Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
