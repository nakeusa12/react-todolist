import React from "react";
import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className="header-title">Todo Lists</h1>
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
