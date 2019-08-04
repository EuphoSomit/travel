import * as actionType from '../constants/constant.action';

const airportRequest = {
  search: '',
  city: '',
  code: '',
  country: ''
}

const entitiesResponse = {
  responses: {},
  trips: {},
  tripOption: [],
  carriers: [],
  airports: [],
  cities: []
}

const defaultState = {
  request: {
    isRoundTrip: true,
    departureAirport: airportRequest,
    arrivalAirport: airportRequest,
    departureAirports: [],
    arrivalAirports: [],
    passengerCount: 1
  },
  response: {
    departure: {
      entities: entitiesResponse
    },
    return: {
      entities: entitiesResponse
    }
  }
}

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_REQUEST:
      return {
        ...state,
        request: action.request,
        receivedAt: action.receivedAt,
        isLoading: true
      };
    case actionType.DEPARTURE_SEARCH_RESULT:
      return {
        ...state,
        response: {
          ...state.response,
          departure: action.response
        },
        receivedAt: action.receivedAt,
        isLoading: false
      };
    case actionType.RETURN_SEARCH_RESULT:
      return {
        ...state,
        response: {
          ...state.response,
          return: action.response
        },
        receivedAt: action.receivedAt,
        isLoading: false
      };
    default:
      return state;
  }
};

export default searchReducer;
