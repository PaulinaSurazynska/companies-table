import React from 'react';
import PropTypes from 'prop-types';
import style from './TableData.module.scss';

const TableData = ({ id, name, city }) => (
  <tr className={style.row} key={id}>
    <td>{id}</td>
    <td>{name}</td>
    <td>{city}</td>
  </tr>
);

TableData.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default TableData;
