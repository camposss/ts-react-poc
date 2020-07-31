import React from "react";

function Hello(props) {
  const {
    greeting
  } = props;
  return <div className="hello-container">{greeting}</div>;
}

export default Hello;