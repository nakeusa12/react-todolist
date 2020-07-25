import React from "react";
import propTypes from "prop-types";
import Button from "../button/Button";

import styles from "./header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className={styles.headerTitle}>Todo Lists</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: propTypes.func.isRequired,
  showAdd: propTypes.bool.isRequired,
  clearTodos: propTypes.func.isRequired
};

export default Header;
