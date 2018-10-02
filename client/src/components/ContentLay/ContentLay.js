import React from 'react';
import TextLay from '../SearchForm/TextLay';
import Button from "../Button/Button";
import Carded from "../Carded";

const ContentLay = (props) =>{
    return(
        <section className="mb-3">              
            <Carded id="new-post" 
                cardname="New Post" 
            className="carded-opaque text-white text-left">
                <TextLay headName="Genre"
                    hclext="ml-2"
                    name="genre"
                    value={props.genre}
                    onChange={props.postChange}
                    classext="bg-opaque"
                placeholder="Genre" />
                <TextLay headName="Title"
                    hclext="ml-2"
                    name="postTitle"
                    value={props.postTitle}
                    onChange={props.postChange}
                    classext="bg-opaque" 
                placeholder="Post Title" />
                <TextLay
                    textarea="true" 
                    headName="Main Body" 
                    hclext="ml-2"
                    name="mainBody"
                    value={props.mainBody}
                    onChange={props.postChange}
                    classext="bg-opaque"
                placeholder="Main Body (expandable)" />
                <Button children="Submit" onClick={props.postThings} />
                <Button children="Cancel" onClick={props.cancelPost} />
            </Carded>
          </section>
    );
};

export default ContentLay;