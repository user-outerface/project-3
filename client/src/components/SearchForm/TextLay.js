import React from 'react';
import InputFields from "./InputFields";

export const TextLay = props => {
    return(
        <section>
            <h5 className="my-2">{props.headName}</h5>
            <InputFields 
                id={props.headName.replace(/\s/g, '')}
                onChange={props.onChange} 
                placeholder={props.headName !== "Topic" ? "YYYY e.g. 2018" : "Topic"} 
                value={props.value}
            />
        </section>
    );
};

export default TextLay;