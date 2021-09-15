import React from "react";

function Specialities(props) {
  return (
    <section id="services" class="service-section pt-150">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8">
            <div class="section-title text-center mb-70">
              <span class="wow fadeInUp" data-wow-delay=".2s">
                - Our Specialities -
              </span>
              <h1 class="wow fadeInUp" data-wow-delay=".4s">
                We care for your health
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay=".2s">
              <div class="icon">
                <img src="/assets/img/service/organic.svg" alt="" />
              </div>
              <div class="content">
                <h3>Organic Sugar</h3>
                <p>For diabetes & diet watchers baked using organic sugar.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay=".4s">
              <div class="icon">
                <img src="/assets/img/service/home.svg" alt="" />
              </div>
              <div class="content">
                <h3>Home Made</h3>
                <p>
                  Ragi, Sathumavathu & kambu flour are freshly grinded at home.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay=".2s">
              <div class="icon">
                <img src="/assets/img/service/nopreservative.svg" alt="" />
              </div>
              <div class="content">
                <h3>Pan India Delivery</h3>
                <p>
                  We deliver our products to every nook and corner of India.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay=".4s">
              <div class="icon">
                <img src="/assets/img/service/health.svg" alt="" />
              </div>
              <div class="content">
                <h3>Fresh and Healthy</h3>
                <p>
                  Almonds & Pistas are dry roasted. Freshly grinded flour is
                  used for almond and pista cookies.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay=".2s">
              <div class="icon">
                <img src="/assets/img/service/nopreservative.svg" alt="" />
              </div>
              <div class="content">
                <h3>No preservatives</h3>
                <p>
                  No Vanaspathi/Margarine used in the making of cookies to get
                  softness & texture and No preservatives added.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay=".6s">
              <div class="icon">
                <img src="/assets/img/service/free.svg" alt="" />
              </div>
              <div class="content">
                <h3>Free shipping</h3>
                <p>Free shipping for 3 & above cookies (within Tamil Nadu)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialities;
