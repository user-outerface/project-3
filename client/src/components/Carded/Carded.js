import React from "react";
import "./Carded.css";

export const Carded = props => {
    let pubArt;
    if(props.published){
        pubArt = props.published;
    };
    return(
    <section className="card mt-3 col-8 mx-auto" {...props}>
        {props.id ? (<div className="card-header">
            {props.cardname}
            {pubArt ? (<div className="published">Published: {pubArt}</div>) : null}
        </div>) : (
            <h2 className="card-header">
                {props.cardname}
            </h2>
        )}
        {props.children}
    </section>
)};

export default Carded;