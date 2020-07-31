import React from "react";
export function Goodbye(props) {
  const {
    greeting
  } = props;
  return <div className="goodbye-container">{greeting}</div>;
}
export default Goodbye;