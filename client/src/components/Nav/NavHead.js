import React from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../AnchorTag/AnchorTag";
import GifList from '../Giffy/GifList';
import SearchBar from '../Giffy/SearchBar';
import Button from '../Button/Button';
import TextIn from '../SearchForm/TextIn';

export const NavHead = props => {
    return(
        <div className="da-head-navs top-nav my-1">
            <ul className="nav">
                <li className="nav-item">
                    Icon/Logo goes Here
                </li>
                <li className="gif-item">
                    <GifList gifs={props.gifs} />
                    <SearchBar onChange={props.onChange} />
                </li>
                <li className="nav-item ml-auto">
                 
                </li>
                <li class="search-button">
                    <Button onClick={props.sExecute} className="btn">ClickMe!</Button>
                    {/* <TextIn name={props.sName} value={props.sValue} onChange={props.sChange} classext="bg-red" /> */}
                </li>
                <li class="text-in"> 
                    <TextIn name={props.sName} value={props.sValue} onChange={props.sChange} classext="bg-red" />
                </li>
                
            </ul>
        </div>
    );
};