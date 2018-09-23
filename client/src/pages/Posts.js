import React, { Component } from 'react';
import Carded from "../components/Carded";
// import Button from "../components/Button/Button";
// import AnchorTag from "../components/AnchorTag/AnchorTag";
// import InputFields from "../components/SearchForm/InputFields";
// import Comms from "../components/inComms";
// import API from "../utils/API";
import "./pages.css";

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
        testArray.map(x =>{
            tested.push(<Carded 
              key={testArray.indexOf(x)} 
              postname={x + testArray.indexOf(x)} 
              children="short synopsis"
              // classext="rounded-0"
              className="carded-opaque text-white text-left rounded-0"
            />);
            return tested;
          });
        return(
            <div className="Page">
                <div className="my-1 text-white">The [insert genre] page!</div>

                <section className="mb-3">
                    {tested}
                </section>
            </div>
        );
    };
};