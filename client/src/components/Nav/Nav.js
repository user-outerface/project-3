import React from "react";
import { Link } from "react-router-dom";
import DropAc from "../Button/DropAc";
import SignModal from "../SignModal/SignModal";
import "./Nav.css";

//The Links in this component will not work
const Nav = props => {
    return(
        <ul className="nav nav-tabs nav-cust">
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
                {props.login ? <DropAc /> : (
                    <div>
                        <a className="logging-logger" data-toggle="modal" data-target="#modalLogIn">
                            Login
                        </a> or <a className="logging-logger" data-toggle="modal" data-target="#modalSignUp">
                            Sign Up
                        </a>
                        <SignModal modId="modalLogIn" />
                        <SignModal modId="modalSignUp" />
                    </div>
                )}
            </li>
        </ul>
    )
};

export default Nav;