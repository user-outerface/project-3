import React from 'react';
import "./giffy.css";
const GifItem = (image) => {
    console.log(image.gif);
    return (
        <li>
            <div className="gif-item">
                <img className="image-gif" src={image.gif.data.data[0].images.downsized.url} alt="" />
            </div>
        </li>
    )
};

export default GifItem;