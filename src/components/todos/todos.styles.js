import { css } from "@emotion/core";

export const todos = () => {
  return css`
    display: flex;
    flex-direction: column;
    min-height: 100px;
  `;
};

export const todoPlaceholder = () => {
  return css`
    font-family: "Ranchers", cursive;
    font-size: 24px;
    text-align: center;
    padding: 16px;
  `;
};

export const addButtonPlaceholder = () => {
  return css`
    font-family: "Ranchers", cursive;
    font-size: 35px;
  `;
};
