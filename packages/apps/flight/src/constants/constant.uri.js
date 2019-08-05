export const API_DIRECTORY = { DOC_ROOT: '' };

export const urlConstants = {
	BASE_URL: process.env.REACT_APP_ENV_URL_API
};

export const API_INTERFACE = {
	GET_CITIES: '/cities',
	GET_FLIGHTS: '/flights'
};

export const uriConstants = {
	GET_CITIES_API:
		urlConstants.BASE_URL + API_INTERFACE.GET_CITIES,
	GET_FLIGHTS_API:
		urlConstants.BASE_URL + API_INTERFACE.GET_FLIGHTS
};
