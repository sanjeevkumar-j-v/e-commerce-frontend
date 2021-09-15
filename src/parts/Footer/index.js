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
          <div class="col-12 col-sm-3">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
              <div class="logo">
                <a href="/">
                  <img src="/assets/img/stlogo.svg" alt="Logo" />
                </a>
              </div>
            </div>
          </div>

          <div class="col-5 col-sm-3">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".4s">
              <h3>About Us</h3>
              <ul class="links">
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/* <div class="col-5">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".6s">
              <h3>About</h3>
              <ul class="links">
                <li>Partners</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div> */}

          <div class="col-5 col-sm-3">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".8s">
              <h3>Contact</h3>
              <ul class="links">
                <li>SweetTooth</li>
                <li>Mepco - Madurai</li>
                <li>Tamil Nadu</li>
                <li>9626244242</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
