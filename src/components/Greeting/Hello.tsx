import React from "react";

type HelloProps = {
    greeting: string;
}

export function Hello(props: HelloProps): React.ReactElement<any, any> | null {
    const {greeting} = props;
    return (
        <div className="hello-container">{greeting}</div>
    )
}