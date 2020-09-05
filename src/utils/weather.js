import * as R from 'ramda';
import { lessThan, greaterThanOrEqual } from 'utils/common';

export const getTemperatureLabel = temp => `${Math.round(temp)} °C`;

export const getDirectionByDegree = R.cond([
  [lessThan(22.5), R.always('North')],
  [lessThan(67.5), R.always('North - East')],
  [lessThan(112.5), R.always('East')],
  [lessThan(157.5), R.always('South - East')],
  [lessThan(202.5), R.always('South')],
  [lessThan(247.5), R.always('South - West')],
  [lessThan(292.5), R.always('West')],
  [lessThan(337.5), R.always('North - West')],
  [greaterThanOrEqual(337.5), R.always('North')]
]);
