import React, { memo, useState } from "react";
import SORT_ORDERS_MAP from "../../constants/sortOrders";
import FilterFields from "../FilterFields/FilterFields";
import Sort from "../Sort/Sort";
import styles from "./Filters.module.css";

function Filters({ fetchFilteredTasks }) {
  const [filters, setFilter] = useState({});

  const injectFilter = (e) => {
    let isOrderAttribute = e.target.name === "order";
    setFilter({
      ...filters,
      [e.target.name]: isOrderAttribute
        ? e.target.value
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
      <FilterFields handleInputChange={injectFilter} />
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
