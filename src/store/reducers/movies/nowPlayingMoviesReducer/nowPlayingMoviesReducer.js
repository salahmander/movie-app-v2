import * as actionTypes from "../../../actions/actionTypes";

const initialState = {
  nowPlayingMovies: [],
  loading: false,
  error: "",
};

const nowPlayingMoviesRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const nowPlayingMoviesSuccess = (state, action) => {
  return {
    ...state,
    nowPlayingMovies: action.payload,
    loading: false,
    error: "",
  };
};

const nowPlayingMoviesFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

const nowPlayingMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOW_PLAYING_MOVIES_REQUEST:
      return nowPlayingMoviesRequest(state, action);
    case actionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS:
      return nowPlayingMoviesSuccess(state, action);
    case actionTypes.FETCH_NOW_PLAYING_MOVIES_FAIL:
      return nowPlayingMoviesFail(state, action);
    default:
      return state;
  }
};

export default nowPlayingMovieReducer;
