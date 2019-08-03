import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import flightReducer from './reducer.flight';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  flight: flightReducer
});

export default rootReducer;
