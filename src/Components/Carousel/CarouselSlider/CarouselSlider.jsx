import React from "react";

// CSS
import "./CarouselSlider.css";

// SVG
import iconStarFill from "../../../assets/icon-star-fill.svg";
import tag from "../../../assets/tag.svg";

// Constants
import { CONFIGURATIONS } from "../../../util/constants/configurations/configurationConstants";

const CarouselSlider = ({ movie, index, slideIndex }) => {
  // Destructure the configuration object values to keep variable declaration shorter
  const { secure_base_url, backdrop_sizes } = CONFIGURATIONS.images;

  const backDrop = `${secure_base_url}${backdrop_sizes[3]}${movie.backdrop_path}`;

  return (
    <div className={slideIndex === index + 1 ? "slider active-anim" : "slider"}>
      <header className="carousel-slider-container">
        <img src={backDrop} alt="movies" />
        <div className="carousel-slider-information-container">
          <img className="tag" src={tag} alt="tag" />
          <div className="icon-star-container">
            <img className="icon-star-fill-1" src={iconStarFill} alt="star-1" />
            <img className="icon-star-fill-2" src={iconStarFill} alt="star-2" />
            <img className="icon-star-fill-3" src={iconStarFill} alt="star-3" />
            <img className="icon-star-fill-4" src={iconStarFill} alt="star-4" />
            <img className="icon-star-fill-5" src={iconStarFill} alt="star-5" />
          </div>
          <h1 className="title desktop-h1">{movie.title}</h1>
          <div className="overlap-group">
            <div className="overlap-group-description">
              <p className="description mobile-card-copy">{movie.overview}</p>
            </div>
            <div className="overlap-group-view">
              <h1>Button</h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default CarouselSlider;
