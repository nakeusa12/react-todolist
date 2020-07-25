import React from "react";
import propTypes from "prop-types";
import cx from "classnames";

import styles from "./button.module.css";

const Button = ({ text, onClick, color, align }) => {
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "main-black-color",
  //   color === "red" && "main-red-color",
  //   align === "left" && "align-left",
  //   align === "right" && "align-right"
  // ].join(" ");

  const classNames = cx(styles.headerBtn, {
    [styles.mainBlackColor]: color === "black",
    [styles.mainRedColor]: color === "red",
    [styles.alignLeft]: color === "left",
    [styles.alignRight]: color === "right"
  });

  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
  color: propTypes.oneOf(["black", "red"]),
  align: propTypes.oneOf(["left", "right"])
};

export default Button;
