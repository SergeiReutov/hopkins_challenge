import { FORECAST } from 'actions/ActionTypes';
import forecast, { initialState } from '../forecast';

describe('forecast reducer', () => {
  test('initial state creation', () => {
    expect(forecast(undefined, { type: 'randomAction' })).toEqual(initialState);
  });

  test('FORECAST.FETCH.REQUEST', () => {
    const action = {
      type: FORECAST.FETCH.REQUEST
    };

    const newState = forecast(initialState, action);
    expect(newState.isLoading).toEqual(true);
  });

  test('FORECAST.FETCH.SUCCESS', () => {
    const action = {
      type: FORECAST.FETCH.SUCCESS,
      current: {
        dt: 123123
      },
      daily: [
        {
          dt: 123124
        }
      ]
    };

    const newState = forecast(initialState, action);
    expect(newState.isLoading).toEqual(false);
    expect(newState.current).toEqual(action.current);
    expect(newState.daily).toEqual(action.daily);
  });

  test('FORECAST.FETCH.ERROR', () => {
    const action = {
      type: FORECAST.FETCH.ERROR,
      error: 'Some error'
    };

    const newState = forecast(initialState, action);
    expect(newState.isLoading).toEqual(false);
    expect(newState.error).toEqual(action.error);
  });

  test('FORECAST.ERROR.CLEAR', () => {
    const action = {
      type: FORECAST.ERROR.CLEAR
    };

    const newState = forecast(initialState, action);
    expect(newState.error).toEqual(initialState.error);
  });

  test('FORECAST.CLEAR_STATE', () => {
    const action = {
      type: FORECAST.CLEAR_STATE
    };

    const someState = {
      ...initialState,
      current: {
        dt: 123123
      },
      daily: [
        {
          dt: 123124
        }
      ]
    };

    const newState = forecast(someState, action);
    expect(newState).toEqual(initialState);
  });
});
