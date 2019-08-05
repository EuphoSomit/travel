import { takeEvery, put, call } from 'redux-saga/effects';
import {
    REQUEST_FLIGHTS_SEARCH, SEARCH_FLIGHTS, SEARCH_FLIGHTS_FAILURE
} from '../constants/constant.action';
import { api } from '../services';
import { _search } from '../utility/search';

function* getFlightsSaga(filters) {
    try {
        const flights = yield call(api.getFlights, {});
        const outFlights = _search(flights.data, filters.filters, false);
        if (filters.filters.roundTrip) {
            const returnFlights = _search(flights.data, filters.filters, true);
            yield put({
                type: SEARCH_FLIGHTS,
                outFlights: outFlights,
                returnFlights: returnFlights,
                passengers: filters.filters.passengers
            });
        } else {
            yield put({
                type: SEARCH_FLIGHTS,
                outFlights: outFlights,
                returnFlights: [],
                passengers: filters.filters.passengers
            });
        }

    } catch (error) {
        yield put({ type: SEARCH_FLIGHTS_FAILURE, error });
    }
}

export function* flightsWatcherSaga() {
    yield takeEvery(REQUEST_FLIGHTS_SEARCH, getFlightsSaga);
}
