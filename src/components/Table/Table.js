import React from 'react';
import style from './Table.module.scss';

const Table = () => (
  <>
    <table className={style.table}>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>City</th>
          <th>Total income</th>
          <th>Avarare incom</th>
          <th>Last month income</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Lorem ipsum 1</td>
          <td>108</td>
          <td>108.108</td>
          <td>27</td>
          <td>27.108</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Lorem ipsum 1</td>
          <td>108</td>
          <td>108.108</td>
          <td>27</td>
          <td>27.108</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Lorem ipsum 1</td>
          <td>108</td>
          <td>108.108</td>
          <td>27</td>
          <td>27.108</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Lorem ipsum 1</td>
          <td>108</td>
          <td>108.108</td>
          <td>27</td>
          <td>27.108</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Lorem ipsum 1</td>
          <td>108</td>
          <td>108.108</td>
          <td>27</td>
          <td>27.108</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Lorem ipsum 1</td>
          <td>108</td>
          <td>108.108</td>
          <td>27</td>
          <td>27.108</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default Table;
