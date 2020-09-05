import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getTemperatureLabel, getDirectionByDegree } from 'utils/weather';
import { WeatherOverviewObject, DailyMeasurementsTemp, WindType } from 'types/forecast';
import './styles.scss';

export default function DayWeather(props) {
  const { date, overview, temp, wind } = props;

  const renderDate = () => (
    <p className="dayWeatherDataRow date">
      {moment(date * 1000).format('ddd, DD.MM')}
    </p>
  );

  const renderTemperature = () => (
    <p className="dayWeatherDataRow temperature">
      {getTemperatureLabel(temp.day)}
    </p>
  );

  const renderIcon = () => (
    <img
      alt={overview[0].description}
      className="dayWeatherIcon"
      src={`http://openweathermap.org/img/wn/${overview[0].icon}@2x.png`}
    />
  );

  const renderWind = () => (
    <p className="dayWeatherDataRow wind">
      {getDirectionByDegree(wind.degree)}
      {`, ${wind.speed} m/s`}
    </p>
  );

  return (
    <div className="dayWeather">
      {renderDate()}
      {renderTemperature()}
      {renderIcon()}
      {renderWind()}
    </div>
  );
}

DayWeather.propTypes = {
  date: PropTypes.number.isRequired,
  overview: PropTypes.arrayOf(WeatherOverviewObject).isRequired,
  temp: DailyMeasurementsTemp.isRequired,
  wind: WindType.isRequired
};
