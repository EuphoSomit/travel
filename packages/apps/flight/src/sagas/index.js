import { all } from 'redux-saga/effects';
import { citiesWatcherSaga } from './saga.cities';
import { flightsWatcherSaga } from './saga.flights';

export default function* root() {
  yield all([citiesWatcherSaga(), flightsWatcherSaga()]);
}
