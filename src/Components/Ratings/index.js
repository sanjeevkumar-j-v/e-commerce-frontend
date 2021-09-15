import React from "react";

function Ratings(props) {
  return (
    <section id="about" class="about-section pt-150">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 flex-center">
            <div class="pt-50 about-img wow fadeInUp" data-wow-delay=".5s">
              <img src="/assets/img/delivery.svg" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div class="section-title">
                <span class="wow fadeInUp" data-wow-delay=".2s">
                  About Us
                </span>
                <h1 class="wow fadeInUp" data-wow-delay=".4s">
                  On-time Delivery and Customer Satisfaction
                </h1>
                <p class="wow fadeInUp" data-wow-delay=".6s">
                  We strive for you to have a super-fast delivery experience to
                  satisfy your inner cravings.
                </p>
              </div>
              <div
                class="rating-meta d-flex align-items-center wow fadeInUp"
                data-wow-delay=".65s"
              >
                <h5>Rating 4.8</h5>
                <div class="rating">
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                </div>
              </div>

              <div class="counter-up wow fadeInUp" data-wow-delay=".8s">
                <div class="single-counter">
                  <h3 id="secondo1" class="countup" cup-end="15" cup-append="+">
                    15 +
                  </h3>
                  <h5>Varities</h5>
                </div>
                <div class="single-counter position-relative">
                  <h3
                    id="secondo2"
                    class="countup"
                    cup-end="150"
                    cup-append="+"
                  >
                    150 +
                  </h3>
                  <h5>Happy users</h5>
                </div>
                <div class="single-counter">
                  <h3 id="secondo3" class="countup" cup-end="50" cup-append="+">
                    50 +
                  </h3>
                  <h5>Reviews</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ratings;
