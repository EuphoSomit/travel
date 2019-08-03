import {
  GET_FLIGHT_REQUESTED
} from '../constants/constant.action';

export function getFlight() {
  return {
    type: GET_FLIGHT_REQUESTED
  };
}
