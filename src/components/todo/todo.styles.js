import { css } from "@emotion/core";

export const todo = ({ theme }) => {
  return css`
    position: relative;

    flex: 0 auto;
    text-align: center;

    min-height: 34px;
    margin: 16px 0 0;
    font-size: 24px;

    border-bottom: 1px solid ${theme.color.primary.red};
  `;
};

export const todoText = () => {
  return css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-family: "Ranchers", cursive;
    font-weight: normal;
  `;
};
