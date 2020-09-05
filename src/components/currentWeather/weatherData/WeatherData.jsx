import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ReactComponent as HumidityIcon } from 'assets/icons/008-humidity.svg';
import { ReactComponent as WindIcon } from 'assets/icons/035-wind.svg';
import { ReactComponent as TemperatureIcon } from 'assets/icons/026-temperature.svg';
import { getTemperatureLabel, getDirectionByDegree } from 'utils/weather';
import { WindType } from 'types/forecast';
import './styles.scss';

export default function WeatherData(props) {
  const {
    date,
    feelsLikeTemp,
    humidity,
    wind
  } = props;

  const renderNameOfToday = () => (
    <p className="weatherDataRow nameOfToday">
      {moment(date * 1000).format('dddd')}
    </p>
  );

  const renderFeelsLikeTemp = () => (
    <p className="weatherDataRow feelsLikeTemp">
      <TemperatureIcon />
      {getTemperatureLabel(feelsLikeTemp)}
    </p>
  );

  const renderHumidity = () => (
    <p className="weatherDataRow humidity">
      <HumidityIcon />
      {`${humidity}%`}
    </p>
  );

  const renderWind = () => (
    <p className="weatherDataRow wind">
      <WindIcon />
      {getDirectionByDegree(wind.degree)}
      {`, ${wind.speed} m/s`}
    </p>
  );

  return (
    <div className="weatherData">
      {renderNameOfToday()}
      {renderFeelsLikeTemp()}
      {renderHumidity()}
      {renderWind()}
    </div>
  );
}

WeatherData.propTypes = {
  date: PropTypes.number.isRequired,
  feelsLikeTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: WindType.isRequired
};
