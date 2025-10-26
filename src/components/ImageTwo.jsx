import { Parallax } from "react-parallax";
import "./parallax.css";

import paulie from "../img/paulie.jpeg";

const ImageTwo = () => (
  <Parallax
    className="bg-image"
    bgImage={paulie}
    bgImageAlt="paulie"
    strength={400}
    bgImageStyle={{
      objectFit: "cover",
      objectPosition: "center",
      width: "100%",
      height: "100%",
    }}
  />
);

export default ImageTwo;
