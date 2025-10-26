import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaBandcamp, FaSpotify } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-nav">
        <a href="#">Home</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>

      <div className="footer-social">
        <a href="#" aria-label="Facebook"><FaFacebook /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="Bandcamp"><FaBandcamp /></a>
        <a href="#" aria-label="Spotify"><FaSpotify /></a>
      </div>

      <div className="footer-copy">
        &copy; {year} 9 Foot Super Soldier
      </div>
    </footer>
  );
};

export default Footer;
