// Library imports
import axios from "axios";

// Action types
import * as actionTypes from "../../actionTypes";

// Util
import { API_KEY } from "../../../../util/constants";

const setTvSeriesOnAirRequest = () => {
  return {
    type: actionTypes.FETCH_TV_SERIES_ON_AIR_REQUEST,
  };
};

const setTvSeriesOnAirSuccess = (data) => {
  return {
    type: actionTypes.FETCH_TV_SERIES_ON_AIR_SUCCESS,
    payload: data,
  };
};

const setTvSeriesOnAirFail = (error) => {
  return {
    type: actionTypes.FETCH_TV_SERIES_ON_AIR_FAIL,
    payload: error,
  };
};

// Fetch TV series that has an episodes with an air date in the nex 7 days
export const fetchTvSeriesOnAir = () => {
  return (dispatch) => {
    dispatch(setTvSeriesOnAirRequest());
    return axios
      .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        dispatch(setTvSeriesOnAirSuccess(res.data));
      })
      .catch((err) => {
        dispatch(setTvSeriesOnAirFail(err));
      });
  };
};
