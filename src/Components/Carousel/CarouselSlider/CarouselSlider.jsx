import React from "react";

// CSS
import "./CarouselSlider.css";

// SVG
import iconStarFill from "../../../assets/icon-star-fill-blue.svg";
import iconStarHalfFill from "../../../assets/icon-star-half-fill-blue.svg";
import iconStarNoFill from "../../../assets/icon-star-no-fill.svg";

// Constants
import { CONFIGURATIONS } from "../../../util/constants/configurations/configurationConstants";

// Utility Functions
import { genreTag } from "../../../util/genreTag/genreTag";

const CarouselSlider = ({ movie, index, slideIndex }) => {
  // Destructure the configuration object values to keep variable declaration short
  const { secure_base_url, backdrop_sizes } = CONFIGURATIONS.images;

  const backDrop = `${secure_base_url}${backdrop_sizes[3]}${movie.backdrop_path}`;
  const ratings = movie.vote_average / 2; // Needs to be halved as the vote_average goes up to 10, it has to be 5
  const genres = genreTag(movie.genre_ids);
  return (
    <div className={slideIndex === index + 1 ? "slider active-anim" : "slider"}>
      <header className="carousel-slider-container">
        <img src={backDrop} alt="movies" />
        <div className="carousel-slider-overlay">
          <div className="carousel-slider-information-container">
            <div className="genres-container">
              {genres.map((genre) => (
                <img
                  className="tag"
                  key={genre?.id}
                  src={genre?.tag}
                  alt={genre?.name}
                />
              ))}
            </div>
            <div className="icon-star-container">
              <img
                className="icon-star-fill-1"
                src={
                  ratings >= 1
                    ? iconStarFill
                    : ratings >= 0.5
                    ? iconStarHalfFill
                    : iconStarNoFill
                }
                alt="star-1"
              />
              <img
                className="icon-star-fill-2"
                src={
                  ratings >= 2
                    ? iconStarFill
                    : ratings >= 1.5
                    ? iconStarHalfFill
                    : iconStarNoFill
                }
                alt="star-2"
              />
              <img
                className="icon-star-fill-3"
                src={
                  ratings >= 3
                    ? iconStarFill
                    : ratings >= 2.5
                    ? iconStarHalfFill
                    : iconStarNoFill
                }
                alt="star-3"
              />
              <img
                className="icon-star-fill-4"
                src={
                  ratings >= 4
                    ? iconStarFill
                    : ratings >= 3.5
                    ? iconStarHalfFill
                    : iconStarNoFill
                }
                alt="star-4"
              />
              <img
                className="icon-star-fill-5"
                src={
                  ratings >= 5
                    ? iconStarFill
                    : ratings >= 4.5
                    ? iconStarHalfFill
                    : iconStarNoFill
                }
                alt="star-5"
              />
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
        </div>
      </header>
    </div>
  );
};

export default CarouselSlider;
