import React from "react";

export const TextIn = props => {
    return (
        (props.textarea === "true" ? (
        <textarea className={props.classext ? ("form-control " + props.classext)
            : "form-control"} {...props}/>) : 
        (<input className={props.classext ? ("form-control " + props.classext)
            : "form-control"} {...props} />)
    )

)};

export default TextIn;