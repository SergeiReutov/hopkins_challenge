import { FORECAST } from './ActionTypes';

export const fetchForecast = () => ({
  type: FORECAST.FETCH.REQUEST
});

export const fetchForecastSuccess = ({ current, daily }) => ({
  type: FORECAST.FETCH.SUCCESS,
  current,
  daily
});

export const fetchForecastError = error => ({
  type: FORECAST.FETCH.ERROR,
  error
});

export const clearError = () => ({
  type: FORECAST.ERROR.CLEAR
});

export const clearState = () => ({
  type: FORECAST.CLEAR_STATE
});
