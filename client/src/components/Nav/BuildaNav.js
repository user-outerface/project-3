import React from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../AnchorTag/AnchorTag";
import "./Nav.css";

export const BuildaNav = props => {
    return (
        <div className="build-a-nav nav-cust my-1">
            <ul className="nav">
                {console.log("patthheeeerrr", props.pather)}
                {(props.pather.length !== 0) && props.pather.map((paParts, i) =>{
                    let newBuild;
                    let pathNamer;
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
                    return <li> <AnchorTag classext="ml-1 mr-1" children={pathNamer && pathNamer} href={newBuild === "" ? null : newBuild} /> </li>
                })}
            </ul>
        </div> 
    );
};