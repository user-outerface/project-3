import React from 'react';
import "./giffy.css";
const GifItem = (image) => {
    return (
        <div>
            <div className="gif-item">
                <img className="image-gif" src={image.gif.data.data[0].images.downsized.url} alt="" />
            </div>
        </div>
    )
};

export default GifItem;