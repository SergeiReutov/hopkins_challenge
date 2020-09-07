import { getDirectionByDegree } from '../weather';

test('getDirectionByDegree', () => {
  expect(getDirectionByDegree(0)).toEqual('N');
  expect(getDirectionByDegree(45)).toEqual('NE');
  expect(getDirectionByDegree(90)).toEqual('E');
  expect(getDirectionByDegree(135)).toEqual('SE');
  expect(getDirectionByDegree(180)).toEqual('S');
  expect(getDirectionByDegree(225)).toEqual('SW');
  expect(getDirectionByDegree(270)).toEqual('W');
  expect(getDirectionByDegree(315)).toEqual('NW');
  expect(getDirectionByDegree(359)).toEqual('N');
});
