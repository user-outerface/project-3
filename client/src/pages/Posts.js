import React, { Component } from 'react';
import Carded from "../components/Carded";
// import Button from "../components/Button/Button";
// import AnchorTag from "../components/AnchorTag/AnchorTag";
// import InputFields from "../components/SearchForm/InputFields";
// import Comms from "../components/inComms";
// import API from "../utils/API";

const testArray=[];
const testArrayLen = 10;
for(let i = 0; i < testArrayLen; i++){
  testArray.push("post");
};

export class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {};
    };
    render(){
        const tested = [];
        testArray.map(x => {
            tested.push(<Carded cardname={x} children="short synopsis"/>);
        });
        return(
            <div className="Page">
                <div>The [insert genre] page!</div>

                <section>
                    {tested}
                </section>
            </div>
        );
    };
};