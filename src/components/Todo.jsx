import React from "react";
import propTypes from "prop-types";

const Todo = props => {
  return (
    <div className="todo">
      <div className="todo-text">{props.text}</div>
    </div>
  );
};

Todo.propTypes = {
  text: propTypes.string.isRequired
};

export default Todo;
