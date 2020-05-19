/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { ascending, descending } from 'utils/sortData';
import style from './Table.module.scss';
import TableData from './TableData/TableData';

const Table = ({ companies }) => {
  const [data, setData] = useState(companies);
  // create a state to toggle between sort order
  const [order, setOrder] = useState(false);

  const sortBy = (key) => {
    setOrder(!order);

    const sorted = [...data].sort((a, b) => {
      return order ? ascending(a[key], b[key]) : descending(a[key], b[key]);
    });
    setData(sorted);
  };

  useEffect(() => {
    setData(companies);
  }, [companies]);

  return (
    <>
      {!data.length ? (
        <p>No results...</p>
      ) : (
        <table className={style.table}>
          <thead>
            <tr>
              <th onClick={() => sortBy('id')}>Id</th>
              <th onClick={() => sortBy('name')}>Name</th>
              <th onClick={() => sortBy('city')}>City</th>
              <th onClick={() => alert('yeah.. I need to be done! :/')}>Total income</th>
              <th onClick={() => alert('yeah.. I need to be done! :/')}>Avarage income</th>
              <th onClick={() => alert('yeah.. I need to be done! :/')}>Last January income</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, city }) => (
              <TableData key={id} id={id} name={name} city={city} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
