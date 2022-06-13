import React from "react";
import "./styles.css";

const ToDoListItem = ({ task, completeTask, deleteTask }) => {
  const handleComplete = () => completeTask();
  const handleDelete = () => deleteTask();

  return (
    <div className="todolist-item">
      <div className="todolist-item__content" onClick={handleComplete}>
        <div
          className={`todolist-item__checkbox ${
            task.completed && "todolist-item__checkbox--completed"
          }`}
        ></div>
        <div
          className={`todolist-item__text ${
            task.completed && "todolist-item__text--completed"
          }`}
        >
          {task.description}
        </div>
      </div>
      <div className="todolist-item__delete">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="todolist-item__delete__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={handleDelete}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default ToDoListItem;
