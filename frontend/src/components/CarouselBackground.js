import React from "react";
import "./CarouselBackground.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselBackground() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: "/Pic/slider1.jpg",
      text: "Welcome to Our Platform",
    },
    {
      id: 2,
      image: "/Pic/slider2.jpg",
      text: "Transform Your Learning Journey",
    },
    {
      id: 3,
      image: "/Pic/slider3.jpg",
      text: "Book a Demo Today!",
    },
  ];

  return (
    <div className="carousel-background">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <img src={slide.image} alt={`Slide ${slide.id}`} />
            <div className="carousel-text">
              <h2>{slide.text}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselBackground;
