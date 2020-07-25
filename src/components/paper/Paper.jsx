import React from "react";
import propTypes from "prop-types";
import styles from "./paper.module.css";

const Paper = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ])
};

export default Paper;
