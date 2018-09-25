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
        modInput = [<TextIn placeholder="Username/Email" />, <TextIn placeholder="Password" />];
    } else if (props.modId === "modalSignUp"){
        modSignIn = "Sign Up!"
        modMessage = "Sign Up Shtuffs Here!";
        modInput = [<TextIn placeholder="Username/Email" />, <TextIn placeholder="Password" />];
    } else {
        modSignIn = null;
        modMessage = null;
        modInput = null;
    };
    return(
        <div className={modSignIn !== null ? "modal signs" : "modal"} id={props.modId} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modSignIn ? modSignIn : "hello world"}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{modMessage ? modMessage : "hi"}</p>
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