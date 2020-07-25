import { css } from "@emotion/core";

export const add = () => {
  return css`
    padding: 16px;
  `;
};
export const addForm = () => {
  return css`
    display: flex;
    align-items: center;
  `;
};

export const addInput = ({ theme }) => {
  return css`
    background: unset;
    border: unset;
    padding: 0 60px;
    flex: 1;
    border-bottom: 1px solid ${theme.color.primary.red};
    outline: none;
    font-size: 16px;
    text-transform: lowercase;
    font-family: "Ranchers", cursive;
  `;
};

export const addBtn = ({ theme }) => {
  return css`
    font-size: 1.8rem;
    padding: 16px;
    padding-right: none;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-family: "Ranchers", cursive;
    &:active {
      text-shadow: 1px 1px 2px ${theme.color.primary.black};
    }
  `;
};
