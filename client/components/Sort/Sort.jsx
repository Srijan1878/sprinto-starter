import React from "react";
import SORT_ORDERS_MAP from "../../constants/sortOrders";
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
          <option>Low to High</option>
          <option>High To Low</option>
        </select>
      </div>
    </>
  );
}

export default Sort;
