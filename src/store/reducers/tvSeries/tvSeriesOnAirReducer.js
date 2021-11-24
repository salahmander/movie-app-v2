import * as actionTypes from "../../actions/actionTypes";

const initialState ={
    tvSeriesOnAir: [],
    loading: false,
    error: "",
}

const tvSeriesOnAirRequest = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const tvSeriesOnAirSuccess = (state, action) => {
    return {
        ...state,
        tvSeriesOnAir: action.payload,
        loading: false
    }
    
}

const tvSeriesOnAirFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.payload,

    }
}

const tvSeriesOnAirReducer = (state = initialState, action) => {
    switch(action.types){
        case actionTypes.FETCH_TV_SERIES_ON_AIR_REQUEST:
            return tvSeriesOnAirRequest(state, action);
        case actionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS:
            return tvSeriesOnAirSuccess(state, action);
        case actionTypes.FETCH_TV_SERIES_ON_AIR_FAIL:
            return tvSeriesOnAirFail(state, action);
        default:
            return state
    }
}

export default tvSeriesOnAirReducer