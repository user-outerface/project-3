import React from "react";
import Button from "../Button/Button";
import "./comment.css";
const ReactMarkdown = require("react-markdown");

export const Comms = props => {
    return(
    <div className=" mb-3 my-1 comms-div-p">
        <div className="text-left comms-div">
            <div className="align-self-center comms-text">
                <ReactMarkdown source={props.comms} />
                <div>{props.children}</div>
            </div>
            {props.deletgo === "true" && <Button className="btn comms-btn" onClick={props.onClickPass} attribsext={{id: props.id}}>&times;ヽ( `д´*)ノ &times;</Button>}
        </div>
    </div>

)};

export default Comms;