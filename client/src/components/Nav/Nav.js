import React from "react";
import { Link } from "react-router-dom";
import DropAc from "../Button/DropAc";
import SignModal from "../SignModal/SignModal";
import AnchorTag from "../AnchorTag/AnchorTag";
import "./Nav.css";

//The Links in this component will not work
export const Nav = props => {
    return(
        <div className="da-navs my-1">
            <ul className="nav nav-cust">
                <li className="nav-item li-item-cust">
                    <Link
                        to="/"
                        className={
                            window.location.pathname === "/" ? "nav-link active" : "nav-link inactive"
                        }
                        id={
                            window.location.pathname === "/" ? "active-cust" : ""
                        }
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item li-item-cust align-items-center">
                    <Link
                        to="/posts"
                        className={
                            window.location.pathname === "/posts" ? "nav-link active" : "nav-link inactive"
                        }
                        id={
                            window.location.pathname === "/posts" ? "active-cust" : ""
                        }
                    >
                        Saved
                    </Link>
                </li>
                <li className="ml-auto mr-1 d-flex align-items-center">
                    {props.login !== "" ? <DropAc logout={props.logout} login={props.login} /> : (
                        <div>
                            <AnchorTag 
                                hrefless="true" 
                                data-toggle="modal" 
                                data-target="#modalLogIn"
                                classext="d-inline"
                            >
                                    Login
                            </AnchorTag> or <AnchorTag 
                                hrefless="true"     
                                data-toggle="modal"     
                                data-target="#modalSignUp"
                                classext="d-inline"
                            >
                                    Sign Up
                            </AnchorTag>

                            <div className="mod-dump">
                                <SignModal modId="modalLogIn" onChange={props.onChange} onClick={props.submitLo} />
                                <SignModal modId="modalSignUp" onChange={props.onChange} onClick={props.submitSi} />
                            </div>
                        </div>
                    )}
                </li>
            </ul>

        </div>
    )
};