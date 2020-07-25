import { css } from "@emotion/core";

export const header = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const headerTitle = theme => {
  return css`
    width: 52%;
    text-align: center;
    font-size: 3.6rem;
    color: ${theme.color.primary.black};
    font-family: "Ranchers", cursive;
    font-weight: 700;
  `;
};
