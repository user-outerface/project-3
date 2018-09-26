

import React from 'react';

const GifItem = (image) => {
    return (
        <li>
            <div className="gif-item">
                <img src={image.gif.images.downsized.url} />
            </div>
        </li>
    )
};

export default GifItem;