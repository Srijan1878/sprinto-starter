import React from "react";
import styles from "./TaskIndicators.module.css";

function TaskIndicators({ taskData }) {
  //getting task status and applying styles based on that
  const getBackgroundColor = (key) => {
    console.log(taskData[key])
    return styles[taskData[key]];
  };

  const fetchDate = () => {
    let dateIntoArray = new Date(taskData.taskDate).toDateString().split(" ");
    return dateIntoArray.splice(0, 3).join(" ");
  };

  return (
    <div className={styles.indicators}>
      <div
        className={`${styles.statusIndicator} ${getBackgroundColor("status")}`}
      ></div>
      <div className={styles.dateAndPriorityWrapper}>
        <h5 className={styles.dateIndicator}>{fetchDate()}</h5>
        <h5
          className={`${styles.priorityIndicator} ${getBackgroundColor(
            "priority"
          )}`}
        >
          {taskData.priority}
        </h5>
      </div>
    </div>
  );
}

export default TaskIndicators;
