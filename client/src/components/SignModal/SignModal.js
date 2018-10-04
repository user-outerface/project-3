import React from "react";
import TextIn from "../SearchForm/TextIn";
import Button from "../Button/Button";
import "./SignModal.css";

const SignModal = props => {
    let modSignIn;
    let modMessage;
    let modInput;
    let btFunk;
    if(props.modId === "modalLogIn"){
        modSignIn = "Login";
        modMessage = "Login Shtuffs Here"
        modInput = [<TextIn key="Username/Email" name="" onChange={props.onChange} placeholder="Username/Email" />, <TextIn key="Password" onChange={props.onChange} placeholder="Password" />];
    } else if (props.modId === "modalSignUp"){
        modSignIn = "Sign Up!"
        modMessage = "Sign Up Shtuffs Here!";
        modInput = [<TextIn key="Username/Email" onChange={props.onChange} placeholder="Username/Email" />, <TextIn key="Password" onChange={props.onChange} placeholder="Password" />];
    } else {
        modSignIn = props.modSignIn ? props.modSignIn : null;
        modMessage = props.modMessage ? props.modMessage : null;
        modInput = props.modInput ? props.modInput : null;
    };
    // if(props.submitL){
    //     btFunk = props.submitL;
    // } else if (props.submitS){
    //     btFunk = props.submitS;
    // } else {
    //     btFunk = null;
    // };
    return(
        <div className={modSignIn !== null ? "modal signs" : "modal"} id={props.modId} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modSignIn ? modSignIn : null}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{modMessage ? modMessage : null}</p>
                        {modInput}
                    </div>
                    <div className="modal-footer">
                        <Button className="btn btn-primary" onClick={props.onClick} >Submit</Button>
                        <Button type="button" className="btn btn-secondary" data-dismiss="modal">Close</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignModal;