import { jsx, css } from "@emotion/core";
import propTypes from "prop-types";

const Container = ({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent
}) => {
  const containerStyles = css`
    display: flex;
    flex-direction : ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent}
  `;
  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch"
};

Container.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]),
  flexDirection: propTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  flexWrap: propTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyContent: propTypes.oneOf([
    "flex-start",
    "flex-end",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "left",
    "right"
  ]),
  alignItems: propTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "first baseline",
    "last baseline",
    "start",
    "end",
    "slef-start",
    "self-end"
  ]),
  alignContent: propTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    "start",
    "end",
    "baseline",
    "first baseline",
    "last baseline"
  ])
};

export default Container;
