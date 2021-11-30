// Library imports
import axios from "axios";

// Action types
import * as actionTypes from "../../actionTypes";

// Util
import { API_KEY } from "../../../../util/constants/constants";

const setNowPlayingMoviesRequest = () => {
  return {
    type: actionTypes.FETCH_NOW_PLAYING_MOVIES_REQUEST,
  };
};

const setNowPlayingMoviesSuccess = (data) => {
  return {
    type: actionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS,
    payload: data,
  };
};

const setNowPlayingMoviesFail = (error) => {
  return {
    type: actionTypes.FETCH_NOW_PLAYING_MOVIES_FAIL,
    payload: error,
  };
};

// Fetch now playing movies in Great Britain.
export const fetchNowPlayingMovies = () => {
  return (dispatch) => {
    dispatch(setNowPlayingMoviesRequest());
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&region=GB`
      )
      .then((res) => {
        dispatch(setNowPlayingMoviesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(setNowPlayingMoviesFail(err));
      });
  };
};
