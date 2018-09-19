import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

//The Links in this component will not work

const Nav = () => (
    <ul className="nav nav-tabs nav-cust">
        <li className="nav-item">
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
        <li className="nav-item">
            <Link  
                to="/saved"
                className={
                    window.location.pathname === "/saved" ? "nav-link active" : "nav-link inactive" 
                }
                id={
                    window.location.pathname === "/saved" ? "active-cust" : ""
                }
            >
                Saved
            </Link>
        </li>
    </ul>
);

export default Nav;