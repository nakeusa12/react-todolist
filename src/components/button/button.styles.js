import { css } from "@emotion/core";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#484848";
      break;

    case "red":
      textColor = "#e06262";
      break;

    default:
      textColor = "#484848";
      break;
  }

  return css`
    width: 24%;
    font-size: 1.8rem;
    font-family: "Ranchers", cursive;
    color: ${textColor}
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
