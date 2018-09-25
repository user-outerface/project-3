import React from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../AnchorTag/AnchorTag";

export const NavHead = props => {
    return(
        <div className="da-head-navs nav-cust my-1">
            <ul className="nav">
                <li className="nav-item">
                    Icon/Logo goes Here
                </li>
                <li className="nav-item ml-auto">
                    Searchbar goes here
                </li>
            </ul>
        </div>
    );
};