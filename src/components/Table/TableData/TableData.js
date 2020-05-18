import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import style from './TableData.module.scss';

const TableData = ({ id, name, city }) => {
  const [sum, setSum] = useState(null);
  const [avagare, setAvarage] = useState(null);
  //   const [recent, setRecent] = useState(null);

  const getTotalIncome = (arr) => {
    const total = arr.reduce((acc, obj) => {
      return (Number(acc) + Number(obj.value)).toFixed(2);
    }, 0);
    return setSum(total);
  };

  const getAvagareIncome = (arr) => {
    const total = arr.reduce((acc, obj) => {
      return (Number(acc) + Number(obj.value)).toFixed(2);
    }, 0);
    const avarage = total / arr.length;
    setAvarage(avarage.toFixed(2));
  };

  //   const getLastMonthIncome = (arr) => {
  //     arr.map((item) => {
  //       //   console.log(item.date);
  //       //   slit the date ande get the year and the month
  //       //
  //     });
  //   };

  useEffect(() => {
    const fetchCompanyIncome = () => {
      axios
        .get(`https://recruitment.hal.skygate.io/incomes/${id}`)
        .then((res) => res.data)
        .then((data) => {
          getTotalIncome(data.incomes);
          getAvagareIncome(data.incomes);
          //   getLastMonthIncome(data.incomes);
        });
    };

    fetchCompanyIncome();
  }, []);

  return (
    <tr className={style.row} key={id}>
      <td data-label="Id">{id}</td>
      <td data-label="Name">{name}</td>
      <td data-label="City">{city}</td>
      <td data-label="Total income">{sum}</td>
      <td data-label="Avarage income">{avagare}</td>
    </tr>
  );
};

TableData.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default TableData;
