/* eslint-disable import/prefer-default-export */

export const getTotalIncome = (arr, dataSetter) => {
  const total = arr.reduce((acc, obj) => {
    return (Number(acc) + Number(obj.value)).toFixed(2);
  }, 0);
  return dataSetter(total);
};

export const getAvagareIncome = (arr, dataSetter) => {
  const total = arr.reduce((acc, obj) => {
    return (Number(acc) + Number(obj.value)).toFixed(2);
  }, 0);
  const avarage = total / arr.length;
  dataSetter(avarage.toFixed(2));
};

export const getLastMonthIncome = (arr, dataSetter) => {
  // console.log(arr);
  const incomesFromJanuary = arr.filter((item) => {
    // split string to get the year and the month from the date
    const el = item.date.split(/[- : .]/);
    const year = el[0];
    const month = el[1];

    // current date, to compare with
    const today = new Date();
    const currentYear = String(today.getFullYear());

    // cos months are calculated from 0
    const january = 0 + String(today.getMonth() - 3);

    return year === currentYear && month === january;
  });

  const sumJanIncome = incomesFromJanuary
    .map((income) => income.value)
    .reduce((a, b) => {
      return (Number(a) + Number(b)).toFixed(2);
    }, 0);
  dataSetter(sumJanIncome);
};
