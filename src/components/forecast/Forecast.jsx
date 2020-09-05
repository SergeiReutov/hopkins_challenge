import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchForecast, clearError, clearState } from 'actions/forecast';
import { Loader, ErrorMessage } from 'components/common';
import { CurrentWeather } from 'components/currentWeather';
import { DailyForecast } from 'components/dailyForecast';
import {
  getCurrentWeather,
  getDailyForecast,
  getIsLoading,
  getError
} from 'selectors/forecast';
import './styles.scss';

export default function Forecast() {
  const dispatch = useDispatch();
  const currentWeather = useSelector(getCurrentWeather);
  const dailyForecast = useSelector(getDailyForecast);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchForecast());
    return () => dispatch(clearState());
  }, [dispatch]);

  const handleErrorClear = () => dispatch(clearError());

  const renderForecast = () => (
    <Fragment>
      <CurrentWeather weather={currentWeather} />
      <DailyForecast weatherList={dailyForecast} />
    </Fragment>
  );

  return (
    <main className="forecastContainer">
      {isLoading
        ? <Loader />
        : renderForecast()
      }
      {error !== null && (
        <ErrorMessage
          error={error}
          onClose={handleErrorClear}
        />
      )}
    </main>
  );
}
