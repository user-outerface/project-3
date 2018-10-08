import React from "react";
import Button from "../Button/Button";
import "./Nav.css";

export const BuildaNav = props => {
    return (
        <div className="build-a-nav bot-nav  my-1">
            <ul className="nav">
                {(props.pather.length !== 0) && props.pather.map((paParts, i) =>{
                    let newBuild;
                    let pathNamer;
                    switch(true){
                        case props.pather[1] === "":
                            return null;
                        case i === props.pather.length - 1:
                            return null;
                        case i < props.pather.legnth:
                            newBuild = props.pather.slice(0, i + 1).join("/");
                            break;
                        case props.pather[i].includes("t&gq="):
                            newBuild = props.pather.slice(0, i + 1).join("/");
                            pathNamer = props.pather[i].substr(props.pather[i].indexOf("=") + 1).replace(/%20/g, " ");
                            break;
                        case props.pather[i] === "posts":
                            pathNamer = "All";
                            newBuild = props.pather.slice(0, i + 1).join("/");
                            break;
                        case i === 0:
                            newBuild = "/";
                            pathNamer = "Home";
                            break;
                        default:
                            return null;
                    }
                    return <li key={"patholder" + i}> <Button key={"pathed" + i} className="nav-butt" children={pathNamer && pathNamer} onClick={props.pOnClick} attribsext={{"data-pathing": (newBuild === "" ? null : newBuild)}} /> </li>
                })}
            </ul>
        </div> 
    );
};