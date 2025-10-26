import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu after clicking
    }
  };

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <div className="title-wrapper">
        <h1
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="title"
        >
          9 Foot Super Soldier
        </h1>
      </div>

      {/* Desktop Menu */}
      <nav className="menu desktop">
        <ul>
          <li>
            <button onClick={() => handleScroll("section1")}>Music</button>
          </li>
          <li>
            <button onClick={() => handleScroll("section2")}>Shows</button>
          </li>
          <li>
            <button onClick={() => handleScroll("section3")}>contact</button>
          </li>
        </ul>
      </nav>

      {/* Hamburger (mobile only) */}
      <div className="hamburger-wrap">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} />
      </div>

      {/* Mobile Overlay Menu */}
      <nav className={`menu-overlay ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <button onClick={() => handleScroll("section1")}>Music</button>
          </li>
          <li>
            <button onClick={() => handleScroll("section2")}>Shows</button>
          </li>
          <li>
            <button onClick={() => handleScroll("section3")}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
