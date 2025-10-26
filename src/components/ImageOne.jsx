import { Parallax } from "react-parallax";
import "./parallax.css";

import smitty from "../img/smitty.jpeg";
import logo from "../assets/logo-white.png";

const ImageOne = () => (
  <Parallax
    className="bg-image"
    bgImage={smitty}
    bgImageAlt="smitty"
    strength={400}
    bgImageStyle={{
      objectFit: "cover",
      objectPosition: "center",
      width: "100%",
      height: "100%",
    }}
  >
    <div className="logo-container">
      <img className="logo" src={logo} alt="9FtSS" />
    </div>
  </Parallax>
);

export default ImageOne;
