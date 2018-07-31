import React from "react";

const linkStyle = {
    color: "black",
}

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button =props => (
    <button
    style={linkStyle}
    value={props.value}
    onClick={props.onClick}
    className={[`btn btn-lg btn-${props.type}`]}
    >
    {props.label}
    </button>
);

export default Button;