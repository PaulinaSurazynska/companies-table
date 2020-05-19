import React, { useState, useEffect } from 'react';
import style from './Table.module.scss';
import TableData from './TableData/TableData';

const Table = ({ companies }) => {
  const [data, setData] = useState(companies);
  const [order, setOrder] = useState(false);

  const sortBy = (key) => {
    setOrder(!order);
    const copyData = [...data];
    setData(copyData.sort((a, b) => (order ? a[key] - b[key] : b[key] - a[key])));
  };

  useEffect(() => {
    setData(companies);
  }, [companies]);

  return (
    <>
      {!data.length ? (
        <p>Loading list of the companies...</p>
      ) : (
        <table className={style.table}>
          <thead>
            <tr>
              <th onClick={() => sortBy('id')}>Id</th>
              <th>Name</th>
              <th>City</th>
              <th>Total income</th>
              <th>Avarage income</th>
              <th>Last month income</th>
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
