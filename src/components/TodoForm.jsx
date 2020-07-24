import React, { useState } from "react";
import propTypes from "prop-types";

const TodoForm = ({ addTodo, showAdd }) => {
  // React Hooks value input
  const [value, setValue] = useState("");

  // Fungsi untuk menghandle btn dengan membawa value
  const handleFormSubmit = e => {
    // agar page tidak refresh
    e.preventDefault();

    // kondisi apabila input tidak ada isi
    if (!value) {
      alert("No Blank Todo!");
      return;
    }

    // kondisi apabila value melebihi 40kata
    if (value.length > 40) {
      alert("please create a shorter todo text!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  // Kondisi jika showadd adalah true maka muncul inputnya
  if (showAdd) {
    return (
      <section className="add">
        <form className="add-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="add-btn main-black-color">Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: propTypes.func.isRequired,
  showAdd: propTypes.bool.isRequired
};

export default TodoForm;
