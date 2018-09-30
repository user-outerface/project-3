import React from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../AnchorTag/AnchorTag";
import Button from "../Button/Button";
import "./Nav.css";

export const BuildaNav = props => {
    return (
        <div className="build-a-nav nav-cust my-1">
            <ul className="nav">
                {console.log("patthheeeerrr", props.pather)}
                {(props.pather.length !== 0) && props.pather.map((paParts, i) =>{
                    let newBuild;
                    let pathNamer;
                    //maybe change the below to switch statement
                    if(i < props.pather.length){
                        newBuild = props.pather.slice(0, i + 1).join("/");    
                    };
                    if(i === 0){
                        newBuild = "/";
                        pathNamer = "Home";
                    };
                    if(props.pather.length === 2){
                        return;
                    };
                    if(i === props.pather.length - 1){
                        return;
                    };
                    if(props.pather[i].includes("t&gq=")){
                        pathNamer = props.pather[i].substr(props.pather[i].indexOf("=") + 1);
                    };
                    if(props.pather[i] === "posts"){
                        pathNamer = "All";
                    }
                    return <li> <Button className="btn btn-default ml-1 mr-1" children={pathNamer && pathNamer} onClick={props.pOnClick} attribsext={{"data-pathing": (newBuild === "" ? null : newBuild)}} /> </li>
                })}
            </ul>
        </div> 
    );
};