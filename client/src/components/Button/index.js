import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = props => (
    <button
    type={"button"}
    className={[`btn btn-${props.class}`]}
    id={props.id}
    value={props.value}
    onClick={props.onClick}
    role={props.role}
    >
    {props.label}
    </button>
);

export default Button;