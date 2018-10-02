import React from 'react';
import './giffy.css';

const SearchBar = (props) => {
    return (
        <div id="gif-input" className="search">
            <input onChange={props.onChange} />
        </div>
    );
}

export default SearchBar;
