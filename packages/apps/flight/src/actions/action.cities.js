import { REQUEST_CITIES } from '../constants/constant.action';

export function fetchCities() {
	return {
		type: REQUEST_CITIES
	}
}
