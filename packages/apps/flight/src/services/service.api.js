import { baseService } from '../services/service';
import { uriConstants } from '../constants/constant.uri';

export function getFlight(data) {
  let url = uriConstants.GET_FLIGHT_API;
  const dataJson = JSON.stringify(data);
  return baseService.post(url, dataJson);
}
