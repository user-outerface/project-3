import React from "react";
import Button from "../Button/Button";

export const Comms = props => {
    return(
    <div className=" mb-3 bg-light my-1">
        <div className="border text-left">
            <div className="align-self-center">{props.children}</div>
            {props.user && <Button className="btn btn-danger m-0" onClick={props.onClickPass} attribsext={{id: props.id}}>✘</Button>}
        </div>
    </div>

)};

export default Comms;