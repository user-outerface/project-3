import React from 'react';

export const AnchorTag = props => {
    let classes = props.className;
    return(
        <div>
            <a href={props.href} className={classes ? "self-align-center " + classes : ""} target="_blank">
                {props.children ? (props.children) : "Link"}
            </a>
        </div>
)};

export default AnchorTag;