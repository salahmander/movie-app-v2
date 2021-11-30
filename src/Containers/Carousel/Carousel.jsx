import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Carousel.css";

// SVG
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

// Components
import CarouselSlider from "../../Components/Carousel/CarouselSlider/CarouselSlider";

// Redux Actions
import { fetchNowPlayingMovies } from "../../store/actions/movies/nowPlayingMoviesAction/nowPlayingMoviesAction";

const Carousel = () => {
  const dispatch = useDispatch();

  // States
  const [slideIndex, setSlideIndex] = useState(1);
  const [slideData, setSlideData] = useState([]);

  // Redux State
  const nowPlayingMovies = useSelector(
    (state) => state.nowPlayingMovies.nowPlayingMovies
  );

  // Fetch now playing movies
  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, [dispatch]);

  /**
   * nowPlayingMovies object reduced to a new array
   * containing 5 entries, to be used for the carousel slides.
   */
  useEffect(() => {
    if (Object.keys(nowPlayingMovies).length > 0) {
      const movieData = nowPlayingMovies?.results?.slice(0, 5);
      setSlideData(movieData);
    }
  }, [nowPlayingMovies]);

  // Next carousel slide handler
  const nextSlide = () => {
    if (slideIndex !== slideData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slideData.length) {
      setSlideIndex(1);
    }
  };

  // Previous carousel slide handler
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slideData.length);
    }
  };

  // Carousel current slide indicator handler
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="carousel-container">
      {/*Carousel Slides*/}
      {slideData.map((data, index) => {
        return (
          <CarouselSlider
            key={data.id}
            title={data.title}
            description={data.overview}
            image={`/Imgs/img${index + 1}.jpg`}
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
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
