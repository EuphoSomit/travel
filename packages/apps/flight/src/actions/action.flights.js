import {
	REQUEST_FLIGHTS_SEARCH
} from '../constants/constant.action';


/**
 * Initiates flight search with keywords.
 * @return {Object}       Action.
 */
export function searchFlights(filters) {
	return {
		type: REQUEST_FLIGHTS_SEARCH,
		filters: filters
	}
}
