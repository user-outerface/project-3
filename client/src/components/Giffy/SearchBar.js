import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="search">
            <input onChange={props.onChange} />
        </div>
    );
}

export default SearchBar;
