import React from 'react';
import styles from './TransactionHistory.module.css';


const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={styles['transaction-history']}>
        <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
        </thead>
        <tbody>
        {items.map(el =>
          <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  )
}


export default TransactionHistory;
