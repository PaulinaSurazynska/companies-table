/* eslint-disable no-nested-ternary */
export const descending = (a, b) => {
  return a < b ? -1 : a > b ? 1 : 0;
};

export const ascending = (a, b) => {
  return a > b ? -1 : a < b ? 1 : 0;
};
