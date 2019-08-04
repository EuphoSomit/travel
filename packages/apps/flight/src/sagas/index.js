import { all } from 'redux-saga/effects';
import { searchAirportWatcherSaga } from './saga.search';

export default function* root() {
  yield all([searchAirportWatcherSaga()]);
}
