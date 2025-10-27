// Home.jsx
import React from "react";
import ImageOne from "../../components/ImageOne";
import ImageTwo from "../../components/ImageTwo";
import ImageThree from "../../components/ImageThree";
import ImageFour from "../../components/ImageFour";
import Music from "../music/Music";
import Footer from "../../components/footer/Footer";
import Shows from "../../components/shows/Shows";
import AOS from 'aos';

import "./home.css";
import 'aos/dist/aos.css';



export const Home = () => {
  AOS.init();

  return (
    <main className="home">

      {/* === SECTION 1 === */}
      <ImageOne />
      <section id="section1" className="section-container">
        <h1 className="section-header" data-aos="fade-down">Music</h1>
        <div data-aos="flip-right">
          <Music />
        </div>
      </section>

      {/* === SECTION 2 === */}
      <ImageTwo />
      <section id="section2" className="section-container" >
        <h2 className="section-header" data-aos="fade-down">Shows</h2>
        <div data-aos="flip-left">
          <Shows />
        </div>
      </section>

      {/* === SECTION 3 === */}
      <ImageThree />
      <section id="section3" className="section-container" >
        <h2 className="section-header" data-aos="fade-down">About</h2>
        <p data-aos="flip-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      <ImageFour />
      <Footer />
    </main>
  );
};
