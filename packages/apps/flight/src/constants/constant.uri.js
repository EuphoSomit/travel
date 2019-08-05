export const API_DIRECTORY = {DOC_ROOT: ''};

export const urlConstants = {
	BASE_URL: process.env.REACT_APP_ENV_URL_API
};

export const API_INTERFACE = {
	GET_SEARCH_AIRPORT: '/airport'
};

export const uriConstants = {
	GET_SEARCH_AIRPORT_API:
		urlConstants.BASE_URL + API_INTERFACE.GET_SEARCH_AIRPORT
};
