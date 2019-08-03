import { all } from 'redux-saga/effects';
import { flightWatcherSaga } from './saga.flight';

export default function* root() {
  yield all([flightWatcherSaga()]);
}
