import React from 'react'

// CSS
import "./CarouselSlider.css"

// SVG
import iconStarFill from "../../../assets/icon-star-fill.svg";
import tag from "../../../assets/tag.svg"
import button from "../../../assets/button.svg"

const CarouselSlider = ({name, description, image, obj, index, slideIndex}) => {
    return (
        <div key={obj.id} className={slideIndex === index + 1 ? "slider active-anim" : "slider"}>
        <header className="carousel-slider-container">
          <img src={image} alt="movies" />
          <div className="carousel-slider-information-container">
            <img className="tag" src={tag} alt="tag"/>
            <div class="icon-star-container">
              <img class="icon-star-fill-1" src={iconStarFill} alt="star-1"/>
              <img class="icon-star-fill-2" src={iconStarFill} alt="star-2"/>
              <img class="icon-star-fill-3" src={iconStarFill} alt="star-3"/>
              <img class="icon-star-fill-4" src={iconStarFill} alt="star-4"/>
              <img class="icon-star-fill-5" src={iconStarFill} alt="star-5"/>
            </div>
            <h1 class="title desktop-h1">{name}</h1>
            <div class="overlap-group">
              <p class="description mobile-card-copy">
                {description}
              </p>
              <img class="view-now-button" src={button} alt="view-now"/>
            </div>
          </div>
        </header>
      </div>
    )
}

export default CarouselSlider


