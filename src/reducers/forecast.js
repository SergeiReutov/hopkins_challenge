import { FORECAST } from 'actions/ActionTypes';

export const initialState = {
  current: {},
  daily: [],
  daysAmount: 3,
  isLoading: true,
  error: null
};

export default function forecast(state = initialState, action) {
  switch (action.type) {
    case FORECAST.FETCH.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FORECAST.FETCH.SUCCESS:
      return {
        ...state,
        current: action.current,
        daily: action.daily,
        isLoading: false
      };
    case FORECAST.FETCH.ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case FORECAST.ERROR.CLEAR:
      return {
        ...state,
        error: initialState.error
      };
    case FORECAST.CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}
