import React from 'react';
import styles from './Statistics.module.css'

const Statistics = ({ stats, title }) => {
  return (
    <>
      <section className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.list}>
          {stats.map(el =>
            <li className={styles.item} key={el.id}>
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>)}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
