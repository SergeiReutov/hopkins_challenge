import { shape, arrayOf, string, number } from 'prop-types';

export const WeatherOverviewObject = shape({
  id: number.isRequired,
  main: string.isRequired,
  description: string.isRequired,
  icon: string.isRequired
});

export const DailyMeasurementsTemp = shape({
  morn: number.isRequired,
  day: number.isRequired,
  eve: number.isRequired,
  night: number.isRequired,
  min: number.isRequired,
  max: number.isRequired
});

const DailyMeasurementsFeelsLike = shape({
  morn: number.isRequired,
  day: number.isRequired,
  eve: number.isRequired,
  night: number.isRequired
});

const WeatherDataItemCommonFields = {
  clouds: number.isRequired,
  dew_point: number.isRequired,
  dt: number.isRequired,
  humidity: number.isRequired,
  pressure: number.isRequired,
  sunrise: number.isRequired,
  sunset: number.isRequired,
  uvi: number.isRequired,
  visibility: number,
  weather: arrayOf(WeatherOverviewObject).isRequired,
  wind_deg: number.isRequired,
  wind_speed: number.isRequired
};

export const CurrentWeatherType = shape({
  ...WeatherDataItemCommonFields,
  feels_like: number.isRequired,
  rain: shape({
    '1h': number
  }),
  temp: number.isRequired
});

export const DailyForecastType = shape({
  ...WeatherDataItemCommonFields,
  feels_like: DailyMeasurementsFeelsLike.isRequired,
  rain: number,
  temp: DailyMeasurementsTemp.isRequired
});

export const WindType = shape({
  degree: number.isRequired,
  speed: number.isRequired
});
