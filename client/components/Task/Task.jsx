import React, { memo, useEffect, useRef } from "react";
import { DELETE_TODO } from "../../graphql/mutations";
import styles from "./Task.module.css";
import { useMutation } from "@apollo/client/react";
import EditModal from "../EditModal/EditModal";
import Image from "next/image";
import edit from "../../public/edit.svg";
import deleteLogo from "../../public/delete.svg";
import TaskIndicators from "../TaskIndicators/TaskIndicators";

function Task({ taskData, fetchAllTasks }) {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    onCompleted: () => {
      fetchAllTasks();
    },
  });
  const singleTask = useRef();
  const [isEditing, setIsEditing] = React.useState(false);

  //deleting task
  const deleteTaskHandler = () => {
    deleteTodo({
      variables: {
        id: taskData.id,
      },
    });
  };

  //toggling state to display edit modal
  const editTodo = () => {
    setIsEditing(!isEditing);
  };



  useEffect(() => {
    singleTask.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className={styles.singleTodoMainContainer} ref={singleTask}>
        <div className={styles.singleTodoContainer} key={taskData.id}>
          <div className={styles.taskDescriptionWrapper}>
            <h3>
              <span>[TASK] -</span> {taskData.description}
            </h3>
          </div>
        </div>
        <div className={styles.editAndDeleteButtonsContainer}>
          <Image
            src={edit}
            width={18}
            height={18}
            onClick={editTodo}
            alt={"edit"}
          />
          <Image
            src={deleteLogo}
            width={18}
            height={18}
            onClick={deleteTaskHandler}
            alt={"delete"}
          />
        </div>
        <TaskIndicators taskData={taskData}/>
      </div>
      {isEditing && (
        <EditModal
          taskData={taskData}
          toggleEditModal={editTodo}
          fetchAllTasks={fetchAllTasks}
        />
      )}
    </>
  );
}

export default memo(Task);
