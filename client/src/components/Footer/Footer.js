import React from "react";
import "./Footer.css";

const Footer = props =>{
    let classPass = "j-footer";
    if(props.classext){
        classPass = props.classext + " j-footer";
    }
    return(
        <section className={classPass} {...props}>
            {props.children}
        </section>
    );
};

export default Footer;