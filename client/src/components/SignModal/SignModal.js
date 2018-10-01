import React from "react";
import TextIn from "../SearchForm/TextIn";
import "./SignModal.css";

const SignModal = props => {
    let modSignIn;
    let modMessage;
    let modInput;
    if(props.modId === "modalLogIn"){
        modSignIn = "Login";
        modMessage = "Login Shtuffs Here"
        modInput = [<TextIn key="Username/Email" placeholder="Username/Email" />, <TextIn key="Password" placeholder="Password" />];
    } else if (props.modId === "modalSignUp"){
        modSignIn = "Sign Up!"
        modMessage = "Sign Up Shtuffs Here!";
        modInput = [<TextIn key="Username/Email" placeholder="Username/Email" />, <TextIn key="Password" placeholder="Password" />];
    } else {
        modSignIn = props.modSignIn ? props.modSignIn : null;
        modMessage = props.modMessage ? props.modMessage : null;
        modInput = props.modInput ? props.modInput : null;
    };
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
                        <button type="button" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignModal;