import React from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../AnchorTag/AnchorTag";
import "./Nav.css";

export const BuildaNav = props => {
    return (
        <div className="build-a-nav bot-nav  my-1">
            <ul className="nav">
                <li className="nav-item">
                    Path/For/Pages/Goes/Here
                </li>
                <li className="nav-item  smol-txt col-4">
                    <p>This will be scripted to append a new button
                    or anchor tag for the url path that is followed
                    for easy navigation</p>
                </li>
            </ul>
        </div> 
    );
};