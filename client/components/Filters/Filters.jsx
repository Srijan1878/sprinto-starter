import React, { memo, useState } from "react";
import SORT_ORDERS_MAP from "../../constants/sortOrders";
import Sort from "../Sort/Sort";
import styles from "./Filters.module.css";

function Filters({ fetchFilteredTasks }) {
  const [filters, setFilter] = useState({});

  const injectFilter = (e) => {
    let isOrderAttribute = e.target.name === "order";    
    setFilter({
      ...filters,
      [e.target.name]: isOrderAttribute
        ? SORT_ORDERS_MAP[e.target.value] || ''
        : e.target.value.toLowerCase(),
    });
  };

  const filterData = () => {
    let filteredData = { ...filters };
    Object.keys(filteredData).forEach((key) => {
      if (filteredData[key] === "all" || filteredData[key] === "") {
        delete filteredData[key];
      }
    });
    fetchFilteredTasks({
      variables: {
        ...filteredData,
      },
    });
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filter}>
        <label>Priority: </label>
        <select onChange={injectFilter} name={"priority"}>
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <div className={styles.filter}>
        <label>Status: </label>
        <select onChange={injectFilter} name={"status"}>
          <option>All</option>
          <option>Pending</option>
          <option>Ongoing</option>
          <option>Completed</option>
        </select>
      </div>
      <div>
        <label>Task Date: </label>
        <input
          name="taskDate"
          type="date"
          className={styles.date}
          onChange={injectFilter}
        />
      </div>
      <Sort injectFilter={injectFilter} />
      <button className={styles.filterBtn} onClick={filterData}>
        Apply Filters
      </button>
    </div>
  );
}

export default memo(Filters);
