import React from "react";

type GoodbyeProps = {
    greeting: string;
}

export function Goodbye(props: GoodbyeProps):  React.ReactElement<any, any> | null {
    const {greeting} = props;
    return (
        <div className="goodbye-container">{greeting}</div>
    )
}