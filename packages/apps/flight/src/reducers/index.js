import { combineReducers } from 'redux';
import searchReducer from './reducer.search';

const rootReducer = combineReducers({
  search: searchReducer
});

export default rootReducer;
