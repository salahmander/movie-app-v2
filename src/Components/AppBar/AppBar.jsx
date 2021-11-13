import React from "react";

import "./AppBar.css";

// Icons
import iconPlay from "../../Assets/icon-play.svg";
import iconPlay1 from "../../Assets/icon-play-1.svg";
import iconHome from "../../Assets/icon-home.svg";
import iconMovie from "../../Assets/icon-movie.svg";
import iconStartStroke from "../../Assets/icon-star-stroke.svg";
import iconTV from "../../Assets/icon-movie.svg";

const AppBar = () => {
  return (
    <div class="app-container">
      <div class="app-container-animate2">
        <div class="overlap-group">
          <img class="icon-play" src={iconPlay} alt="icon button"/>
          <img class="icon-play-1" src={iconPlay1} alt="icon button"/>
        </div>
      </div>
      <div class="buttons">
        <div class="icon-button">
          <img class="icon" src={iconHome} alt="home button" />
        </div>
        <div class="icon-button-1">
          <img class="icon" src={iconMovie} alt="movie button" />
        </div>
        <div class="icon-button-2">
          <img class="icon" src={iconTV} alt="tv series button"/>
        </div>
        <div class="icon-button-3">
          <img class="icon" src={iconStartStroke} alt="favourite button"/>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
