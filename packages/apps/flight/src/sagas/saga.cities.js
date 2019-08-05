import { takeEvery, put, call } from 'redux-saga/effects';
import {
    FETCH_CITIES, REQUEST_CITIES, FETCH_CITIES_FAILURE
} from '../constants/constant.action';
import { api } from '../services';

function* getCitiesSaga() {
    try {
        const result = yield call(api.getCities, {});
        yield put({
            type: FETCH_CITIES,
            cities: result.data
        });
    } catch (error) {
        yield put({ type: FETCH_CITIES_FAILURE, error });
    }
}

export function* citiesWatcherSaga() {
    yield takeEvery(REQUEST_CITIES, getCitiesSaga);
}
