import * as R from 'ramda';
import { lessThan, greaterThanOrEqual } from 'utils/common';

export const getTemperatureLabel = temp => `${Math.round(temp)} °C`;

export const getDirectionByDegree = R.cond([
  [lessThan(22.5), R.always('N')],
  [lessThan(67.5), R.always('NE')],
  [lessThan(112.5), R.always('E')],
  [lessThan(157.5), R.always('SE')],
  [lessThan(202.5), R.always('S')],
  [lessThan(247.5), R.always('SW')],
  [lessThan(292.5), R.always('W')],
  [lessThan(337.5), R.always('NW')],
  [greaterThanOrEqual(337.5), R.always('N')]
]);
