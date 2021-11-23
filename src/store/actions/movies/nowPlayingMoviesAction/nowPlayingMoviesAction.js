// Library imports
import axios from "axios";

// Action types
import * as actionTypes from "../../actionTypes";

// Util
import { API_KEY } from "../../../../util/constants";

export const setNowPlayingMoviesRequest = () => {
  return {
    type: actionTypes.FETCH_NOW_PLAYING_MOVIES_REQUEST,
  };
};

export const setNowPlayingMoviesSuccess = (data) => {
  return {
    type: actionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS,
    payload: data,
  };
};

export const setNowPlayingMoviesFail = (error) => {
  return {
    type: actionTypes.FETCH_NOW_PLAYING_MOVIES_FAIL,
    payload: error,
  };
};

export const fetchNowPlayingMovies = () => {
  return (dispatch) => {
    dispatch(setNowPlayingMoviesRequest());
    return (
      axios
        // Fetch now playing movies in Great Britain.
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&region=GB`
        )
        .then((res) => {
          dispatch(setNowPlayingMoviesSuccess(res.data));
        })
        .catch((err) => {
          dispatch(setNowPlayingMoviesFail(err));
        })
    );
  };
};
