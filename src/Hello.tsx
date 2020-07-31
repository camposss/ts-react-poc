/** @jsx jsx */
import React from "react";

import { cx, css } from "emotion";

export interface HelloProps {
  greeting?: string;
}

function Hello(props: HelloProps): React.ReactElement<any, any> | null {
  const { greeting } = props;
  return <div className={cx("hello-container", styles.helloContainer)}>{greeting}</div>;
}

const styles = {
  helloContainer: css`
    width: 100%;
    height: 100%;
    border: 1px solid magenta;
  `,
};

export default Hello;
