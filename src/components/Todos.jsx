import React from "react";
import propTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    // kondisi apabila tidak ada isi todo akan muncul placeholder
    <section className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div className="todo-placeholder">
          Add todo by clicking{" "}
          <span className="add-button-placeholder">Add</span> button on the top
          left corner
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      text: propTypes.string
    })
  ),
  completeTodo: propTypes.func.isRequired
};

export default Todos;
