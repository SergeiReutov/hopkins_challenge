import {
  getStatePart,
  getIsLoading,
  getError,
  getCurrentWeather,
  getDaily,
  getDaysAmount,
  getDailyForecast
} from '../forecast';

const store = {
  forecast: {
    current: {
      dt: 123123
    },
    daily: [
      {
        dt: 123124
      },
      {
        dt: 123125
      },
      {
        dt: 123126
      },
      {
        dt: 123127
      },
      {
        dt: 123128
      }
    ],
    daysAmount: 3,
    isLoading: true,
    error: null
  }
};

describe('forecast selector', () => {
  test('getStatePart', () => {
    expect(getStatePart(store)).toEqual(store.forecast);
  });

  test('getIsLoading', () => {
    expect(getIsLoading(store)).toEqual(store.forecast.isLoading);
  });

  test('getError', () => {
    expect(getError(store)).toEqual(store.forecast.error);
  });

  test('getCurrentWeather', () => {
    expect(getCurrentWeather(store)).toEqual(store.forecast.current);
  });

  test('getDaily', () => {
    expect(getDaily(store)).toEqual(store.forecast.daily);
  });

  test('getDaysAmount', () => {
    expect(getDaysAmount(store)).toEqual(store.forecast.daysAmount);
  });

  test('getDailyForecast', () => {
    expect(getDailyForecast(store)).toEqual(store.forecast.daily.slice(0, store.forecast.daysAmount));
  });
});
