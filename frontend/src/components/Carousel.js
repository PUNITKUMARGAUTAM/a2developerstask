import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel() {
  return (
    <Carousel autoPlay infiniteLoop>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
