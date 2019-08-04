import {
  GET_SEARCH_AIRPORT
} from '../constants/constant.action';

export function searchAirports(searchString, isDeparture) {
  return {
    type: GET_SEARCH_AIRPORT,
    payload: {
      searchString,
      isDeparture
    }
  };
}
