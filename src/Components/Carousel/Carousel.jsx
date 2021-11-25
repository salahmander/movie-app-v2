import React, { useState } from "react";

import "./Carousel.css";

// SVG
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import iconStarFill from "../../assets/icon-star-fill.svg";
import tag from "../../assets/tag.svg"
import button from "../../assets/button.svg"

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
            <header className="carousel-slide-container">
              <img src={`/Imgs/img${index + 1}.jpg`} alt="movies" />
              <div className="carousel-slide-information-container">
                <img className="tag" src={tag} alt="tag"/>
                <div class="icon-star-container">
                  <img class="icon-star-fill-1" src={iconStarFill} alt="star-1"/>
                  <img class="icon-star-fill-2" src={iconStarFill} alt="star-2"/>
                  <img class="icon-star-fill-3" src={iconStarFill} alt="star-3"/>
                  <img class="icon-star-fill-4" src={iconStarFill} alt="star-4"/>
                  <img class="icon-star-fill-5" src={iconStarFill} alt="star-5"/>
                </div>
                <h1 class="title desktop-h1">Godzilla vs. Kong</h1>
                <div class="overlap-group">
                  <p class="description mobile-card-copy">
                    In a time when monsters walk the Earth, humanity’s fight for
                    its future sets Godzilla and Kong on a collision course that
                    will see the two most powerful forces of nature on the planet
                    collide in a spectacular battle for the ages.
                  </p>
                  <img class="view-now-button" src={button} alt="view-now"/>
                </div>
              </div>
            </header>
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
