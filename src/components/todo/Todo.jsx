import React from "react";
import propTypes from "prop-types";
import styles from "./todo.module.css";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  return (
    <div className={styles.todo} onClick={() => completeTodo(index)}>
      <div
        className={styles.todoText}
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </div>
    </div>
  );
};

Todo.propTypes = {
  text: propTypes.string.isRequired,
  completeTodo: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
  isCompleted: propTypes.bool.isRequired
};

export default Todo;
