import React from 'react';

const GifItem = (image) => {
    return (
        <div>
            <div className="gif-item">
                <img src={image.gif.data.data[0].images.downsized.url} alt="" />
            </div>
        </div>
    )
};

export default GifItem;