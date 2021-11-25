import React, { useState } from "react";

import "./Carousel.css";

// SVG
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

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
        return (
          <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
            <img src={`/Imgs/img${index + 1}.jpg`} alt="movies"/>
          </div>
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
          <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
