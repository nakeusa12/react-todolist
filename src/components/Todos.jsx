import React from "react";

const Todos = ({ children }) => {
  return (
    <section className="todos">
      <div className="todo">
        <div className="todo-text">{children}</div>
      </div>
    </section>
  );
};

export default Todos;
