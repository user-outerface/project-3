import React from "react";

export const Button = props => {
    let defaultSwitch = ("btn btn-default col-4 m-2");
    if(props.className){
        defaultSwitch = props.className;
    }
    return(
    // <button className={"btn btn-default col-4 m-2 " + props.classExt} {...props}>
    <button className={
            props.classext ? 
            ("btn btn-default col-4 m-2 " + props.classext) : 
            defaultSwitch} 
            onClick={props.onClick} 
            {...props.attribsext}>
                {props.children}
    </button>
)};

export default Button;