import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import SlideImage from "../components/SlideImage";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <SlideImage />
      <Footer />
    </>
  );
}

export default Home;
