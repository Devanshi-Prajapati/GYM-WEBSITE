import React from "react";
import Gallery from "./Gallery";
import { useNavigate } from "react-router-dom";



const Hero = ( { galleryRef, pricingRef } ) => {


const scrollToSection = (sectionRef) => {
  if (sectionRef.current) {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button onClick={() => scrollToSection(galleryRef)}>Start Your Journey</button>
          <button onClick={() => scrollToSection(pricingRef)}>Discover Your Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
