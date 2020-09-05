import { FORECAST } from 'actions/ActionTypes';
import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_EXTERNAL } from 'utils/api';
import { fetchForecastSuccess, fetchForecastError } from 'actions/forecast';

export function* fetchForecastSaga() {
  try {
    const response = yield call(
      GET_EXTERNAL,
      'https://api.openweathermap.org/data/2.5/onecall' +
      '?lat=52.5200&lon=13.4050' +
      '&units=metric' +
      '&appid=3163660e55591e48bebbd91b01176891'
    );
    yield put(fetchForecastSuccess({
      daily: response.daily,
      current: response.current
    }));
  } catch (e) {
    yield put(fetchForecastError(e.message));
  }
}

export const forecastSagas = [
  takeEvery(FORECAST.FETCH.REQUEST, fetchForecastSaga)
];
