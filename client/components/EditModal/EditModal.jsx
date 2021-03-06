import { useMutation } from "@apollo/client";
import React from "react";
import TASK_STATUS from "../../constants/taskStatus.js";
import TASK_PRIORITIES from "../../constants/taskPriorities";
import { EDIT_TODO } from "../../graphql/mutations";
import styles from "./EditModal.module.css";
import amendDateFormat from "../../utils/amendDateFormat.js";
import FilterFields from "../FilterFields/FilterFields.jsx";

function EditModal({ taskData, toggleEditModal, fetchAllTasks }) {
  const [updateTodo] = useMutation(EDIT_TODO, {
    onCompleted: () => {
      fetchAllTasks();
    },
  });
  const [newData, setNewData] = React.useState({});

  const handleInputChange = (e) => {
    setNewData({
      ...newData,
      [e.target.name]:
        e.target.name !== "description"
          ? e.target.value.toLowerCase()
          : e.target.value,
    });
  };

  const updateTodoHandler = () => {
    updateTodo({
      variables: {
        id: taskData.id,
        description: newData.description,
        status: newData.status,
        priority: newData.priority,
        taskDate: newData.taskDate,
      },
    });
    toggleEditModal();
  };

  const checkIfSelected = (optionValue, key) => {
    if (optionValue === taskData[key]) {
      return true;
    }
  };

  return (
    <>
      <div className={styles.editModalContainer}>
        <h3>User: </h3>
        <input
          type={"text"}
          disabled={true}
          name={"name"}
          onChange={handleInputChange}
          className={`${styles.editTaskInput} ${styles.nameInput}`}
          defaultValue={taskData.user.name}
        />
        <h3>Task: </h3>
        <input
          type={"text"}
          name={"description"}
          onChange={handleInputChange}
          className={styles.editTaskInput}
          defaultValue={taskData.description}
          autoFocus={true}
        />
        <div className={styles.statusAndPriorityContainer}>
          {
            <FilterFields
              handleInputChange={handleInputChange}
              editModal={true}
              checkIfSelected={checkIfSelected}
              noAllField
            />
          }          
        </div>
        <div className={styles.dateContainer}>
          <h3>DATE</h3>
          <input
            type="date"
            name="taskDate"
            onChange={handleInputChange}
            defaultValue={amendDateFormat(taskData.taskDate)}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <button onClick={toggleEditModal}>CANCEL</button>
          <button onClick={updateTodoHandler}>SAVE</button>
        </div>
      </div>
      <div className={styles.backdrop}></div>
    </>
  );
}

export default EditModal;
