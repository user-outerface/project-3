import React from 'react';

const SearchBar = (props) => {
    // constructor() {
    //     super();
    //     this.state = { term: '' }
    // }

    // onInputChange(term) {
    //     this.setState({ term });
    //     this.props.onTermChange(term);
    // }

    // render() {
    return (
        <div className="search">
            <input onChange={props.onChange} />
        </div>
    );
    // }
}

export default SearchBar;
