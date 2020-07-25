import { css } from "@emotion/core";

export const button = ({ color, align, theme }) => {
  let textColor;

  const {
    color: { primary }
  } = theme;

  switch (color) {
    case "black":
      textColor = primary.black;
      break;

    case "red":
      textColor = primary.red;
      break;

    default:
      textColor = primary.black;
      break;
  }

  return css`
    width: 24%;
    font-size: 1.8rem;
    font-family: "Ranchers", cursive;
    color: ${textColor};
    text-align: ${align};
    letter-spacing: 0.5rem;
    padding: 16px;
    background: unset;
    border: unset;
    outline: unset;
    text-transform: uppercase;
    cursor: pointer;
  `;
};
