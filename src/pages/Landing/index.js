import React from "react";
import HeroSection from "../../Components/HeroSection";
import Ratings from "../../Components/Ratings";
import Specialities from "../../Components/Specialities";
import Testimonials from "../../Components/Testimonials";

function Landing(props) {
  return (
    <div>
      <HeroSection />
      <Specialities />
      <Ratings />
      <Testimonials />
    </div>
  );
}

export default Landing;
