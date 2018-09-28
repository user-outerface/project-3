import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
    let gifItems;
    if(props.gifs){
        gifItems = <GifItem gif={props.gifs} />
    };

    return (
        <div className="gif-list">{props.gifs ? gifItems : null}</div>

    );
};

export default GifList;