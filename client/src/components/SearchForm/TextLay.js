import React from 'react';
import TextIn from "./TextIn";

export const TextLay = props => {
    return(
        <section>
            <h5 className="my-2">{props.headName}</h5>
            <TextIn 
                id={props.headName.replace(/\s/g, '')}
                onChange={props.onChange} 
                placeholder={props.placeholder} 
                value={props.value}
            />
        </section>
    );
};

export default TextLay;