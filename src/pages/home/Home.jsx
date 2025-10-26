// Home.jsx
import React from "react";
import ImageOne from "../../components/ImageOne";
import ImageTwo from "../../components/ImageTwo";
import ImageThree from "../../components/ImageThree";
import ImageFour from "../../components/ImageFour";
import "./home.css";
import Footer from "../../components/footer/Footer";
import Music from "../music/Music";

export const Home = () => {
  return (
    <main className="home">
      <ImageOne />

      {/* SECTION 00 */}
      <section id="section1" class="wf80">

        <div class="inner">

          <svg class="wf80-title" viewBox="0 0 1400 360" aria-label="Music" role="img">
            <defs>

              <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"  stop-color="#cfe8ff"/>
                <stop offset="18%" stop-color="#72afff"/>
                <stop offset="33%" stop-color="#f5f8ff"/>
                <stop offset="49%" stop-color="#2b2b2b"/>
                <stop offset="66%" stop-color="#f6d0b8"/>
                <stop offset="82%" stop-color="#ff8fb8"/>
                <stop offset="100%" stop-color="#ffd1a3"/>
              </linearGradient>

              <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stop-color="#7c5200"/>
                <stop offset="45%"  stop-color="#b97a00"/>
                <stop offset="70%"  stop-color="#e8b11e"/>
                <stop offset="100%" stop-color="#ffda5f"/>
              </linearGradient>


              <linearGradient id="shineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stop-color="rgba(255,255,255,0)"/>
                <stop offset="45%"  stop-color="rgba(255,255,255,0)"/>
                <stop offset="50%"  stop-color="rgba(255,255,255,0.95)"/>
                <stop offset="55%"  stop-color="rgba(255,255,255,0)"/>
                <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
              </linearGradient>

              <mask id="textMask">
                <text x="50%" y="68%" text-anchor="middle"
                      font-family="Bungee, system-ui, sans-serif"
                      font-size="240" letter-spacing="6"
                      >MUSIC</text>
              </mask>


              <filter id="cyanGlow" x="-40%" y="-60%" width="180%" height="220%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b"/>
                <feColorMatrix in="b" type="matrix"
                  values="0 0 0 0 0
                          0 0 0 0 0.9
                          0 0 0 0 1
                          0 0 0 1 0" result="c"/>
                <feMerge>
                  <feMergeNode in="c"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>


              <filter id="deepShadow" x="-20%" y="-20%" width="140%" height="160%">
                <feOffset dx="10" dy="12" result="o"/>
                <feGaussianBlur in="o" stdDeviation="6" result="g"/>
                <feColorMatrix in="g" type="matrix"
                  values="0 0 0 0 0
                          0 0 0 0 0
                          0 0 0 0 0
                          0 0 0 .55 0" result="s"/>
                <feMerge>
                  <feMergeNode in="s"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>


            <g mask="url(#textMask)">
              <rect class="shine" x="-50%" y="0" width="200%" height="100%" fill="url(#shineGrad)"/>
            </g>


            <text x="50%" y="68%" text-anchor="middle"
                  font-family="Bungee, system-ui, sans-serif"
                  font-size="240" letter-spacing="6"
                  fill="url(#chrome)"
                  stroke="url(#goldStroke)" stroke-width="18" paint-order="stroke"
                  filter="url(#deepShadow)"
                  >MUSIC</text>

            <text x="50%" y="68%" text-anchor="middle"
                  font-family="Bungee, system-ui, sans-serif"
                  font-size="240" letter-spacing="6"
                  fill="none" stroke="#00e7ff" stroke-width="3" opacity=".85"
                  filter="url(#cyanGlow)"
                  >MUSIC</text>
          </svg>

          <p class="wf80-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris…
          </p>
        </div>
        <Music/>
      </section>

      <ImageTwo />

      {/* SECTION 01 */}
      <section id="section2">
        <h2>Header</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <ImageThree />

      {/* SECTION 02 */}
      <section id="section3">
        <h2>Header</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <ImageFour />

      <Footer />
    </main>
  );
};
