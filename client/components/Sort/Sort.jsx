import React from "react";
import styles from "./Sort.module.css";

function Sort({ injectFilter }) {
  return (
    <>
      <div className={styles.sortByContainer}>
        Sort by:
        <select onChange={injectFilter} name={"sortBy"}>
          <option>None</option>
          <option>Priority</option>
          <option>Status</option>
        </select>
      </div>
      <div className={styles.orderContainer}>
        Order:
        <select onChange={injectFilter} name={"order"}>
          <option>None</option>
          <option value={'ASC'}>Low to High</option>
          <option value={'DESC'}>High To Low</option>
        </select>
      </div>
    </>
  );
}

export default Sort;
