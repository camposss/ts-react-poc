import React from "react";

export interface HelloProps {
    greeting?: string;
}

function Hello(props: HelloProps): React.ReactElement<any, any> | null {
    const {greeting} = props;
    return (
        <div className="hello-container">{greeting}</div>
    )
}

export default Hello;