import * as R from 'ramda';

export const getStatePart = R.prop('forecast');

export const getIsLoading = R.pipe(
  getStatePart,
  R.prop('isLoading')
);

export const getError = R.pipe(
  getStatePart,
  R.prop('error')
);

export const getCurrentWeather = R.pipe(
  getStatePart,
  R.prop('current')
);

export const getDaily = R.pipe(
  getStatePart,
  R.prop('daily')
);

export const getDaysAmount = R.pipe(
  getStatePart,
  R.prop('daysAmount')
);

export const getDailyForecast = R.converge(
  R.take,
  [getDaysAmount, getDaily]
);
