import { baseService } from '../services/service';
import { uriConstants } from '../constants/constant.uri';

export function getCities(data) {
	let url = uriConstants.GET_CITIES_API;
	const dataJson = JSON.stringify(data);
	return baseService.get(url, dataJson);
}

export function getFlights(data) {
	let url = uriConstants.GET_FLIGHTS_API;
	const dataJson = JSON.stringify(data);
	return baseService.get(url, dataJson);
}