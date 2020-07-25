/** @jsx jsx **/
// import React from "react";
import { jsx } from "@emotion/core";
import propTypes from "prop-types";
// import styles from "./todo.module.css";

import * as styles from "./todo.styles";
import { useTheme } from "emotion-theming";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const theme = useTheme();

  return (
    <div css={styles.todo({ theme })} onClick={() => completeTodo(index)}>
      <div css={styles.todoText({ theme, isCompleted })}>{text}</div>
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
