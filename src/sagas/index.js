import { all } from 'redux-saga/effects';
import { forecastSagas } from './forecast';

export default function* rootSaga() {
  yield all([
    ...forecastSagas
  ]);
}
