import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_SEARCH_AIRPORT,
  GET_FLIGHT_SUCCESS,
  GET_FLIGHT_FAILURE
} from '../constants/constant.action';
import { api } from '../services';

function* getsearchAirportSaga(action) {
  try {
    const result = yield call(api.getFlight, action.payload);
    yield put({
      type: GET_FLIGHT_SUCCESS,
      payload: result.data.results
    });
  } catch (error) {
    yield put({ type: GET_FLIGHT_FAILURE, error });
  }
}

export function* searchAirportWatcherSaga() {
  yield takeLatest(GET_SEARCH_AIRPORT, getsearchAirportSaga);
}