import React from 'react';
import style from './Table.module.scss';
import TableData from './TableData/TableData';

const Table = ({ companies }) => {
  return (
    <>
      {!companies.length ? (
        <p>Loading list of the companies...</p>
      ) : (
        <table className={style.table}>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>City</th>
              <th>Total income</th>
              <th>Avarage income</th>
              <th>Last month income</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(({ id, name, city }) => (
              <TableData key={id} id={id} name={name} city={city} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
