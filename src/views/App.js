import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'components/Pagination/Pagination';
import Table from 'components/Table/Table';
import SearchBar from 'components/SearchBar/SearachBar';
import style from './App.module.scss';

function App() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const { data } = await axios.get('https://recruitment.hal.skygate.io/companies');
        setCompanies(data);
      } catch (err) {
        setError(true);
      }
    };
    getCompanies();
  }, []);

  //   pagination logic
  const lastIndexPerPage = itemsPerPage * currentPage;
  const firstIndexPerPage = lastIndexPerPage - itemsPerPage;
  const currentItems = companies.slice(firstIndexPerPage, lastIndexPerPage);

  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  const searchCompany = (e) => setSearch(e.target.value);

  const filteredCompanies = currentItems.filter((company) => {
    return Object.values(company)
      .map((value) => {
        return String(value);
      })
      .find((value) => value.toUpperCase().includes(search.toUpperCase()));
  });

  return (
    <div className={style.page}>
      <div className={style.content}>
        <h1 className={style.title}>Companies table</h1>
        <SearchBar searchCompany={searchCompany} />
        {error ? (
          <p>There was a problem with loading the data, please try again later</p>
        ) : (
          <Table companies={filteredCompanies} />
        )}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={companies.length}
          changePage={changePage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
