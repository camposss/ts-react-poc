/** @jsx jsx */
import React from "react";
// import { cx, css } from "emotion";
import { jsx, css } from "@emotion/core";

export interface HelloProps {
  greeting?: string;
}

const color = "white";

function Hello(props: HelloProps): React.ReactElement<any, any> | null {
  const { greeting } = props;
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
      className={"hello-container"}
    >
      {greeting}
    </div>
  );
}

const styles = {
  helloContainer: css`
    width: 100%;
    height: 100%;
    border: 1px solid magenta;
  `,
};

export default Hello;
