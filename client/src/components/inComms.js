import React from "react";
import Button from "./Button/Button";

export const Comms = props => {
    return(
    <div className="input-group mb-3 mx-auto row text-center justify-content-center">
        <div className="col-9 border d-flex align-items-center">
            <div className="align-self-center">{props.children}</div>
        </div>
        <div className="input-group-append">
            <Button className="btn btn-danger m-0" onClick={props.onClick} attribsext={{id: props.id}}>✘</Button>
        </div>
    </div>

)};

export default Comms;