import React from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../AnchorTag/AnchorTag";
import Button from "../Button/Button";
import "./Nav.css";

export const BuildaNav = props => {
    return (
        <div className="build-a-nav nav-cust my-1">
            <ul className="nav">
                {(props.pather.length !== 0) && props.pather.map((paParts, i) =>{
                    let newBuild;
                    let pathNamer;
                    switch(true){
                        case props.pather.length === 2:
                            return;
                        case i === props.pather.length - 1:
                            return;
                        case i < props.pather.legnth:
                            newBuild = props.pather.slice(0, i + 1).join("/");
                            break;
                        case props.pather[i].includes("t&gq="):
                            pathNamer = props.pather[i].substr(props.pather[i].indexOf("=") + 1);
                            break;
                        case props.pather[i] === "posts":
                            pathNamer = "All";
                            break;
                        case i === 0:
                            newBuild = "/";
                            pathNamer = "Home";
                            break;
                        default:
                            return;
                    }
                    return <li> <Button className="btn btn-default ml-1 mr-1" children={pathNamer && pathNamer} onClick={props.pOnClick} attribsext={{"data-pathing": (newBuild === "" ? null : newBuild)}} /> </li>
                })}
            </ul>
        </div> 
    );
};