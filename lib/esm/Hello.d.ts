import React from "react";
import "./greeting.css";
export interface HelloProps {
    greeting?: string;
}
declare function Hello(props: HelloProps): React.ReactElement<any, any> | null;
export default Hello;
