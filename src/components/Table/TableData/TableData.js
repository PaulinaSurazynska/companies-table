import React, { useState, useEffect } from 'react';
import { getTotalIncome, getAvagareIncome, getLastMonthIncome } from 'utils/TableMethods';
import PropTypes from 'prop-types';
import axios from 'axios';
import style from './TableData.module.scss';

const TableData = ({ id, name, city }) => {
  const [sum, setSum] = useState(null);
  const [avagare, setAvarage] = useState(null);
  const [error, setError] = useState(false);
  const [recent, setRecent] = useState(null);

  useEffect(() => {
    const fetchCompanyIncome = async () => {
      try {
        axios
          .get(`https://recruitment.hal.skygate.io/incomes/${id}`)
          .then((res) => res.data)
          .then((data) => {
            getTotalIncome(data.incomes, setSum);
            getAvagareIncome(data.incomes, setAvarage);
            getLastMonthIncome(data.incomes, setRecent);
          });
      } catch (err) {
        setError(true);
      }
    };

    fetchCompanyIncome();
  }, []);

  return (
    <>
      {error ? (
        <tr className={style.row}>
          <td>error while loading data, try again later</td>
        </tr>
      ) : (
        <tr className={style.row} key={id}>
          <td data-label="Id">{id}</td>
          <td data-label="Name">{name}</td>
          <td data-label="City">{city}</td>
          <td data-label="Total income">{sum}</td>
          <td data-label="Avarage income">{avagare}</td>
          {recent ? (
            <td data-label="January income">{recent}</td>
          ) : (
            <td data-label="January income">no income</td>
          )}
        </tr>
      )}
    </>
  );
};

TableData.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default TableData;
