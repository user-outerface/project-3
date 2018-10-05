import React from "react";
import Button from "../Button/Button";
import "./comment.css";

export const Comms = props => {
    return(
    <div className=" mb-3 my-1 comms-div-p">
        <div className="text-left comms-div">
            <div className="align-self-center comms-text">{props.children}</div>
                <Button className="btn comms-btn " onClick={props.onClickPass} attribsext={{ id: props.id }}>ヽ( `д´*)ノ &times;</Button>
        </div>
    </div>

)};

export default Comms;