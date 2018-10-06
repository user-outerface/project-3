import React from "react";
import "./Carded.css";

export const Carded = props => {
    let pubArt;
    let classext;
    if(props.published){
        pubArt = props.published;
    };
    if(props.classext){
        classext="card col-8 mx-auto" + props.classext
    } else {
        classext="card col-8 mx-auto"
    };
    return(
    <section className={classext} {...props}>
        {props.id ? (<div className="card-header">
            {props.cardname ? props.cardname : null}
            {props.postname ? props.postname : null}
            {pubArt ? (<div className="published">Published: {pubArt}</div>) : null}
        </div>) : ( <div> Genre:
                {props.cardname ? <h2 className="card-header">
                    {props.postname}
                </h2>: null}
                {props.postname ? <div>{props.postname}</div> : null}
        </div>      
        )}
            <div>Post:
            <div className="post-text-prim">{props.children}</div>
        </div>
    </section>
)};

export default Carded;