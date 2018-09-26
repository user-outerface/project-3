

import React from 'react';

const GifItem = (image) => {
    console.log(image.gif);
    return (
        <li>
            <div className="gif-item">
            <div>hi</div>
                {/* <img src={image.gif.images.downsized.url} /> */}
                <img src={image.gif.data.data[0].images.downsized.url} />
            </div>
        </li>
    )
};

export default GifItem;