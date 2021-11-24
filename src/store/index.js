/**
 * Keep the imports and combined reducers in alphabetical order, to maintain easy readability.
 */
import { combineReducers } from "redux";

import nowPlayingMovieReducer from "./reducers/movies/nowPlayingMoviesReducer/nowPlayingMoviesReducer";
import tvSeriesOnAirReducer from "./reducers/tvSeries/tvSeriesOnAirReducer";

export default combineReducers({
  nowPlayingMovies: nowPlayingMovieReducer,
  tvSeriesOnAir: tvSeriesOnAirReducer,
});
