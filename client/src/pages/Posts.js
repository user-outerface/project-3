import React, { Component } from 'react';
import Carded from "../components/Carded";
import Button from "../components/Button/Button";
import AnchorTag from "../components/AnchorTag/AnchorTag";
import InputFields from "../components/SearchForm/InputFields";
import Comms from "../components/inComms";
import moment from "moment";
import API from "../utils/API";

class Saved extends Component {
    constructor(props){
        super(props);
        this.state = {};
    };
    render(){
        return(
            <div className="Savvy">
            </div>
        );
    }
};

export default Saved;