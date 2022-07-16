import React from "react";
import TASK_PRIORITIES from "../../constants/taskPriorities";
import TASK_STATUS from "../../constants/taskStatus";
import styles from "./FilterFields.module.css";

function FilterFields({
  handleInputChange,
  editModal = false,
  checkIfSelected = () => {},
  noAllField = false,
}) {
  return (
    <>
      <div className={styles.filter}>
        <label>Priority: </label>
        <select onChange={handleInputChange} name={"priority"}>
          {!noAllField && <option>All</option>}
          {TASK_PRIORITIES.map((taskPriority, index) => (
            <option
              key={index}
              selected={editModal && checkIfSelected(taskPriority, "priority")}
            >
              {taskPriority}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filter}>
        <label>Status: </label>
        <select onChange={handleInputChange} name={"status"}>
          {!noAllField && <option>All</option>}
          {TASK_STATUS.map((taskStatus, index) => (
            <option
              key={index}
              selected={checkIfSelected(taskStatus, "status")}
            >
              {taskStatus}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default FilterFields;
