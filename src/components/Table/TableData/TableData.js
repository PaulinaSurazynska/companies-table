import React from 'react';
import PropTypes from 'prop-types';
import style from './TableData.module.scss';

const TableData = ({ id, name, city }) => {
  return (
    <>
      <tr className={style.row} key={id}>
        <td data-label="Id">{id}</td>
        <td data-label="Name">{name}</td>
        <td data-label="City">{city}</td>
      </tr>
    </>
  );
};

TableData.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default TableData;
