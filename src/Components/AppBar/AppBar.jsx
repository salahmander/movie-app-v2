import React from "react";

import "./AppBar.css";

// Icons
import iconPlay from "../../assets/icon-play.svg";
import iconPlay1 from "../../assets/icon-play-1.svg";
import iconHome from "../../assets/icon-home.svg";
import iconMovie from "../../assets/icon-movie.svg";
import iconStartStroke from "../../assets/icon-star-stroke.svg";
import iconTV from "../../assets/icon-tv.svg";

/**
 * This is to allow the svg icons to change
 * colour when a user hover over them, colour is
 * is currently set to #1e5ad8 (blurple colour).
 * To change the colour update `feColorMatrix` to
 * desired colour.
 *
 */
const SvgMatrixFilter = () => {
  return (
    <>
      <svg>
        <defs>
          <filter id="icon-filter">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values="0.12 0   0   0   0
              0   0.35  0   0   0
              0   0   0.85  0   0
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
    <div className="app-bar-container">
      <div className="app-bar-container-animate2">
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
