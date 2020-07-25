/** @jsx jsx **/
import { jsx } from "@emotion/core";

import { useState } from "react";
import propTypes from "prop-types";
// import styles from "./todoform.module.css";

import * as styles from "./todoform.styles";
import { useTheme } from "emotion-theming";

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

  const theme = useTheme();

  // Kondisi jika showadd adalah true maka muncul inputnya
  if (showAdd) {
    return (
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            css={styles.addInput({ theme })}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button css={styles.addBtn({ theme })}>Add</button>
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
