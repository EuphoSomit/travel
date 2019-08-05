import {baseService} from '../services/service';
import {uriConstants} from '../constants/constant.uri';

export function getSearchAirport(data) {
	let url = uriConstants.GET_SEARCH_AIRPORT_API;
	const dataJson = JSON.stringify(data);
	return baseService.get(url, dataJson);
}

export function getDepartFlight(data) {
	let url = uriConstants.GET_DEPART_FLIGHT_API;
	const dataJson = JSON.stringify(data);
	return baseService.get(url, dataJson);
}

export function getReturnFlight(data) {
	let url = uriConstants.GET_RETURN_FLIGHT_API;
	const dataJson = JSON.stringify(data);
	return baseService.get(url, dataJson);
}
