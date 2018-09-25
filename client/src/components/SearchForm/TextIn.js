import React from "react";

export const TextIn = props => (
    <input className={props.classext ? ("form-control " + props.classext)
: "form-control"} {...props} />
);

export default TextIn;