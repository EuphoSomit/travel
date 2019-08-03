import * as actionType from '../constants/constant.action';

const defaultState = {
  loading: false
};

const peopleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_FLIGHT_REQUESTED:
      return {
        ...state
      };

    case actionType.GET_FLIGHT_SUCCESS:
      return {
        ...state,
        flightDetails: action.payload
      };

    case actionType.GET_FLIGHT_FAILURE:
      return {
        loading: false
      };

    default:
      return state;
  }
};

export default peopleReducer;
