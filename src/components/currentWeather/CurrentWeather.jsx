import React, { Fragment } from 'react';
import * as R from 'ramda';
import { NoData } from 'components/common';
import { WeatherData } from 'components/currentWeather/weatherData';
import { getTemperatureLabel } from 'utils/weather';
import { CurrentWeatherType } from 'types/forecast';
import './styles.scss';

export default function CurrentWeather(props) {
  const { weather } = props;

  const renderWeatherData = () => (
    <WeatherData
      date={weather.dt}
      feelsLikeTemp={weather.feels_like}
      humidity={weather.humidity}
      wind={{
        degree: weather.wind_deg,
        speed: weather.wind_speed
      }}
    />
  );

  const renderIcon = () => (
    <img
      alt={weather.weather[0].description}
      className="currentWeatherIcon"
      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    />
  );

  const renderTemp = () => (
    <div className="currentWeatherTemp">
      {getTemperatureLabel(weather.temp)}
    </div>
  );

  const renderCurrentWeather = () => (
    <Fragment>
      {renderWeatherData()}
      {renderIcon()}
      {renderTemp()}
    </Fragment>
  );

  return (
    <section className="currentWeather">
      {R.isEmpty(weather)
        ? <NoData />
        : renderCurrentWeather()
      }
    </section>
  );
}

CurrentWeather.propTypes = {
  weather: CurrentWeatherType
};
