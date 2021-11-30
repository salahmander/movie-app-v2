import React, { useState } from "react";

import "./Carousel.css";

// SVG
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

// Components
import CarouselSlider from "../../Components/Carousel/CarouselSlider/CarouselSlider";

// Dummy Data
import dataSlider from "./dataSlider";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="carousel-container">
      {/*Carousel Slides*/}
      {dataSlider.map((obj, index) => {
        const image = `/Imgs/img${index + 1}.jpg`;
        const name = "Godzilla vs. Kong";
        const description =
          "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.";        
        return (
          <CarouselSlider
            name={name}
            description={description}
            image={image}
            obj={obj}
            index={index}
            slideIndex={slideIndex}
          />
        );
      })}
      {/*Carousel Buttons*/}
      <div className="next-container-button">
        <button onClick={nextSlide} className="btn-slide next">
          <img src={rightArrow} alt="right-arrow" />
        </button>
      </div>
      <div className="prev-container-button">
        <button onClick={prevSlide} className="btn-slide prev">
          <img src={leftArrow} alt="left-arrow" />
        </button>
      </div>
      {/*Carousel Indicators*/}
      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
