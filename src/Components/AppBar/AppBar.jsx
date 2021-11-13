import React from "react";

import "./AppBar.css";

// Icons
import iconPlay from "../../Assets/icon-play.svg";
import iconPlay1 from "../../Assets/icon-play-1.svg";
import iconHome from "../../Assets/icon-home.svg";
import iconMovie from "../../Assets/icon-movie.svg";
import iconStartStroke from "../../Assets/icon-star-stroke.svg";
import iconTV from "../../Assets/icon-movie.svg";

//https://css-tricks.com/the-many-ways-to-change-an-svg-fill-on-hover-and-when-to-use-them/
const SvgMatrixFilter = () => {
  return (
    <>
      <svg>
        <defs>
          <filter id="icon-filter">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values="0.33 0   0   0   0
              0   0.22  0   0   0
              0   0   0.80  0   0
              0   0   0   1   0 "
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

const AppBar = () => {
  const homeButtonHandler = () => {
    console.log("Home");
  };

  const movieButtonHandler = () => {
    console.log("Movie");
  };

  const tvSeriesButtonHandler = () => {
    console.log("TV series");
  };

  const favouriteButtonHandler = () => {
    console.log("Favourites");
  };
  return (
    <div className="app-container">
      <div className="app-container-animate2">
        <div className="overlap-group">
          <img className="icon-play" src={iconPlay} alt="icon button" />
          <img className="icon-play-1" src={iconPlay1} alt="icon button" />
        </div>
      </div>
      <div className="buttons">
        <div className="icon-button" onClick={homeButtonHandler}>
          <img className="icon" src={iconHome} alt="home button" />
        </div>
        <div className="icon-button-1" onClick={movieButtonHandler}>
          <img className="icon" src={iconMovie} alt="movie button" />
        </div>
        <div className="icon-button-2" onClick={tvSeriesButtonHandler}>
          <img className="icon" src={iconTV} alt="tv series button" />
        </div>
        <div className="icon-button-3" onClick={favouriteButtonHandler}>
          <img className="icon" src={iconStartStroke} alt="favourite button" />
        </div>
      </div>
      <SvgMatrixFilter />
    </div>
  );
};

export default AppBar;
