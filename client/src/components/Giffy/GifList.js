import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
    let gifItems;
    if(props.gifs){
        // gifItems = props.gifs.map((image) => {
        //     return <GifItem key={image.id} gif={image} />
        // });
        gifItems = <GifItem gif={props.gifs} />
    };

    return (
        <div className="gif-list">{props.gifs ? gifItems : null}</div>

    );
};

export default GifList;