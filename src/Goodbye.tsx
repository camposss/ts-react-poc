/** @jsx jsx */
import React from "react";
import { cx, css } from "emotion";
import { jsx } from "@emotion/core";

jsx;

export interface GoodbyeProps {
  greeting?: string;
}

export function Goodbye(props: GoodbyeProps): React.ReactElement<any, any> | null {
  const { greeting } = props;
  return <div className={cx("goodbye-container", styles.goodbyeContainer)}>{greeting}</div>;
}

const styles = {
  goodbyeContainer: css`
    width: 100%;
    height: 100%;
    border: 1px solid magenta;
  `,
};

export default Goodbye;
