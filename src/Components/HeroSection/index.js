import React from "react";

function HeroSection(props) {
  return (
    <section id="home" class="hero-section">
      <div class="hero-shape">
        <img src="/img/cookie_love.svg" alt="" class="shape" />
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="wow fadeInUp" data-wow-delay=".2s">
                Healthy cookies <span>of your dreams are here</span>
              </h1>
              <p class="wow fadeInUp" data-wow-delay=".4s">
                Our cookies are freshly baked with homemade butter and lots of
                love
              </p>
              <a
                href="/products"
                rel="nofollow"
                class="main-btn btn-hover wow fadeInUp"
                data-wow-delay=".6s"
              >
                Purchase Now
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
              <img src="/assets/img/cookie_love.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
