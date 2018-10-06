import React from "react";
import GifList from '../Giffy/GifList';
import Button from '../Button/Button';
import TextIn from '../SearchForm/TextIn';
import Sakura from "../../images/Sakura.png";
import './Nav.css';

export const NavHead = props => {
    return(
        <div className="da-head-navs top-nav my-1">
            <ul className="nav">
                <li className="nav-item">  
                        <img src={Sakura} alt="food" className="img-fluid food-img" />
                </li>
                <li className="gif-item">
                    <GifList gifs={props.gifs} />
                </li>
                <li className="nav-item ml-auto">
                 
                </li>
                <li className="search-button">
                    <Button onClick={props.sExecute} className="search-btn">Search</Button>
                </li>
                <li className="text-in"> 
                    <TextIn name={props.sName} value={props.sValue} onChange={props.sChange} className="search-input" />
                </li>
                
            </ul>
        </div>
    );
};