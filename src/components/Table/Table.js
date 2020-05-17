import React, { useState, useEffect } from 'react';
import getData from 'utils/getData';
import style from './Table.module.scss';
import TableData from './TableData/TableData';

const Table = () => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData('https://recruitment.hal.skygate.io/companies', setCompanies, setError);
  }, []);

  return (
    <>
      {error && <p>There was a problem with loading the list, try later</p>}
      {companies.length ? (
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
      ) : (
        <p>Loading list of the companies...</p>
      )}
    </>
  );
};

export default Table;
