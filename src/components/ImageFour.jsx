import { Parallax } from "react-parallax";
import "./parallax.css";
import useMediaQuery from "../hooks/useMediaQuery";

import band from "../img/band.jpg";

const ImageFour = () => {
  const isPhone = useMediaQuery("(max-width: 767px)");

  return (
    <Parallax
      className="bg-image bg-image-four"
      bgImage={band}
      bgImageAlt="band"
      strength={isPhone ? 10 : 400}
      bgImageStyle={{
        objectFit: "cover",
        width: "100%",
      }}
    />
  );
};

export default ImageFour;
