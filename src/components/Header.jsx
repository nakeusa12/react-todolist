import React from "react";
import propTypes from "prop-types";

const Header = ({ showAddToggle, showAdd }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: propTypes.func.isRequired,
  showAdd: propTypes.bool.isRequired
};

export default Header;
