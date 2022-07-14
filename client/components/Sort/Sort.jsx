import React from "react";
import SORT_ORDERS_MAP from "../../constants/sortOrders";
import styles from "./Sort.module.css";

function Sort({ injectFilter }) {

  return (
    <>
      <div className={styles.sortByContainer}>
        Sort by:
        <select onChange={injectFilter} name={"sortBy"}>
          <option hidden>None</option>
          <option>Priority</option>
          <option>Status</option>
        </select>
      </div>
      <div className={styles.orderContainer}>
        Order:
        <select onChange={injectFilter} name={"order"}>
          <option hidden>None</option>
          <option>Low to High</option>
          <option>Descending</option>
        </select>
      </div>
    </>
  );
}

export default Sort;
