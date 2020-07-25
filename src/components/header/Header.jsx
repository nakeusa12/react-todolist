/** @jsx jsx **/
// import React from "react";
import { jsx } from "@emotion/core";
import propTypes from "prop-types";
import Button from "../button/Button";
import { useTheme } from "emotion-theming";

// import styles from "./header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section css={styles.header}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
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
