import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_FLIGHT_REQUESTED,
  GET_FLIGHT_SUCCESS,
  GET_FLIGHT_FAILURE
} from '../constants/constant.action';
import { api } from '../services';

function* getFlightSaga(action) {
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

export function* flightWatcherSaga() {
  yield takeLatest(GET_FLIGHT_REQUESTED, getFlightSaga);
}
