import {combineReducers} from 'redux';

import flights from './flights';
import cities from './cities';
import filters from './filters';

const rootReducer = combineReducers({
	flights: flights,
	cities: cities,
	filters: filters
});

export default rootReducer;
