/** @jsx jsx **/
// import React from "react";
import { jsx } from "@emotion/core";
import propTypes from "prop-types";

// cara 2
// import cx from "classnames";
// import styles from "./button.module.css";

// Cara 3
import * as styles from "./button.styles";

const Button = ({ text, onClick, color, align }) => {
  // Cara 1
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "main-black-color",
  //   color === "red" && "main-red-color",
  //   align === "left" && "align-left",
  //   align === "right" && "align-right"
  // ].join(" ");

  // Cara 2
  // const classNames = cx(styles.headerBtn, {
  //   [styles.mainBlackColor]: color === "black",
  //   [styles.mainRedColor]: color === "red",
  //   [styles.alignLeft]: color === "left",
  //   [styles.alignRight]: color === "right"
  // });

  // Cara 3

  return (
    // <button className={classNames} onClick={onClick}>
    //   {text}
    // </button>
    <button css={styles.button({ align, color })} onClick={onClick}>
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
