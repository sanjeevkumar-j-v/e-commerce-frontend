import React from "react";

function Header(props) {
  return (
    <header class="header">
      <div class="navbar-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="/">
                  <img src="/assets/img/stlogo.svg" alt="Logo" />
                  {/* <h3>
                    <i>Cook and Bake</i>
                  </h3> */}
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="page-scroll" href="#home">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#services">
                        Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#how">
                        How It Works
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#testimonial">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
