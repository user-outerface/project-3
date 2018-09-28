import React from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../AnchorTag/AnchorTag";
import GifList from '../Giffy/GifList';
import SearchBar from '../Giffy/SearchBar';

export const NavHead = props => {
    return(
        <div className="da-head-navs my-1">
            <ul className="nav">
                <li className="nav-item">
                    Icon/Logo goes Here
                </li>
                <li className="gif-item">
                    <GifList gifs={props.gifs} />
                    <SearchBar onChange={props.onChange} />
                </li>
                <li className="nav-item ml-auto">
                    Searchbar goes here
                </li>
            </ul>
        </div>
    );
};