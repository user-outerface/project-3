import React from 'react';
import TextIn from "./TextIn";

export const TextLay = props => {
    return(
        <section>
            <h5 className={props.hclext ? "my-2 " + props.hclext : "my-2"}>{props.headName}</h5>
            <TextIn 
                id={props.headName && props.headName.replace(/\s/g, '')}
                name={props.name}
                onChange={props.onChange} 
                placeholder={props.placeholder} 
                value={props.value}
                classext={props.classext}
                textarea={props.textarea ? "true" : "false"}
            />
        </section>
    );
};

export default TextLay;