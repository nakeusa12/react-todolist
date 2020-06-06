import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-btn main-black-color">Add</button>
          <h1 className="header-title">Todo Lists</h1>
          <button className="header-btn main-red-color">Clear</button>
        </section>

        <section className="add">
          <div className="add-form">
            <input type="text" className="add-input" />
            <button className="add-btn main-black-color">Add</button>
          </div>
        </section>

        <section className="todos">
          <div className="todo">
            <div className="todo-text">Learning react</div>
          </div>
          <div className="todo">
            <div className="todo-text">Learning react</div>
          </div>
          <div className="todo">
            <div className="todo-text">Learning react</div>
          </div>
          <div className="todo">
            <div className="todo-text">Learning react</div>
          </div>
          <div className="todo">
            <div className="todo-text">Learning react</div>
          </div>
          <div className="todo">
            <div className="todo-text">Learning react</div>
          </div>
        </section>
      </div>
    </div>
  );
}
