import React from "react";
import "./Carded.css";

export const Carded = props => {
    let pubArt;
    let classext;
    if(props.published){
        pubArt = props.published;
    };
    if(props.classext){
        classext="card col-8 mx-auto text-left " + props.classext
    } else {
        classext="card col-8 mx-auto text-left"
    };
    return(
    <section className={classext} {...props}>
        {props.id ? (<div className="card-header">
            {props.cardname ? props.cardname : null}
            {props.postname ? props.postname : null}
            {pubArt ? (<div className="published">Published: {pubArt}</div>) : null}
        </div>) : ( <div>
                {props.cardname ? <h2 className="card-header">
                    {props.postname}
                </h2>: null}
                {props.postname ? <div>{props.postname}</div> : null}
        </div>      
        )}
        {props.children}
        {props.extchildren}
    </section>
)};

export default Carded;