/** @jsx jsx **/
import { jsx, css } from "@emotion/core";
import propTypes from "prop-types";

const Item = ({ children, flex, align }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${align};
      `}
    >
      {children}
    </div>
  );
};

Item.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]),
  flex: propTypes.oneOf([propTypes.number, propTypes.string]),
  align: propTypes.oneOf(["right", "left", "center", "justify"])
};

export default Item;
