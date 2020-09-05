import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { NoData } from 'components/common';
import { DayWeather } from 'components/dailyForecast/dayWeather';
import { DailyForecastType } from 'types/forecast';
import './styles.scss';

export default function DailyForecast(props) {
  const { weatherList } = props;

  const renderDayWeather = weather => (
    <DayWeather
      key={weather.dt}
      date={weather.dt}
      overview={weather.weather}
      temp={weather.temp}
      wind={{
        degree: weather.wind_deg,
        speed: weather.wind_speed
      }}
    />
  );

  const renderDailyForecast = () => weatherList.map(renderDayWeather);

  return (
    <section className="dailyForecast">
      {R.isEmpty(weatherList)
        ? <NoData />
        : renderDailyForecast()
      }
    </section>
  );
}

DailyForecast.propTypes = {
  weatherList: PropTypes.arrayOf(DailyForecastType)
};
