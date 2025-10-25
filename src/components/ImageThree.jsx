import { Parallax } from 'react-parallax'
import "./parallax.css"

import willy from "../img/willy.jpeg"

const ImageThree = () => (
    <Parallax
      className='bg-image'
        bgImage={willy}
        bgImageAlt="willy"
        strength={400}
        bgImageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%"
        }}
    >
    </Parallax>
);

export default ImageThree;