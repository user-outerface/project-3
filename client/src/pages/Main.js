import React, { Component } from 'react';
// import TextLay from '../components/SearchForm/TextLay';
// import Button from "../components/Button/Button";
import Carded from "../components/Carded";
// import AnchorTag from "../components/AnchorTag/AnchorTag";
// import Saved from "./Posts";
// import API from "../utils/API";
import "./pages.css";

const testArray=[];
const testArrayLen = 10;
for(let i = 0; i < testArrayLen; i++){
  testArray.push("topic" + i);
};

export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };

  render() {
    const tested = [];
    testArray.map(x =>{
      tested.push(<Carded 
        key={testArray.indexOf(x)} 
        postname={x + testArray.indexOf(x)} 
        children="short synopsis"
        classext="rounded-0"
      />);
      return tested;
    });
    return (
      <div className="Page">
        <h3 className="my-1 text-white">Welcome!</h3>

        <section className="bg-opaque">
          {tested}
        </section>
      </div>
    );
  };
};
