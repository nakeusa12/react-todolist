/** @jsx jsx **/
// import React from "react";
import { jsx } from "@emotion/core";
import propTypes from "prop-types";
import Todo from "../todo/Todo";
// import styles from "./todos.module.css";
import * as styles from "./todos.styles";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Todos = ({ todos, completeTodo }) => {
  return (
    // kondisi apabila tidak ada isi todo akan muncul placeholder
    <section className="todos-component">
      <Container flexDirection="column">
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
          <div css={styles.todoPlaceholder}>
            Add todo by clicking{" "}
            <span css={styles.addButtonPlaceholder}>ADD</span> button <br /> on
            the top left corner
          </div>
        )}
      </Container>
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
