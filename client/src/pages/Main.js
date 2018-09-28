import React, { Component } from 'react';
// import TextLay from '../components/SearchForm/TextLay';
// import Button from "../components/Button/Button";
import Carded from "../components/Carded";
// import AnchorTag from "../components/AnchorTag/AnchorTag";
// import Saved from "./Posts";
import API from "../utils/API";
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

  componentDidMount(){
    this.props.populate();
  };
  
  render() {
    const tested = [];
    let res = this.props.dbHit;
    console.log("the rezzy res ", res);
    console.log(this.props.dbHit);
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
    // try{
    //   if(res[0].data !== undefined){
    //     console.log("hellurr", res[0].data);
    //   }
    // } catch (err){
    //   console.log("oops");
    // };
    return (
      <div className="Page">
        <h3 className="my-1 text-white">Welcome!</h3>

        <section className="mb-3">
          {/* {tested} */}
          {res !== undefined ? res[0] && res[0].map(posts => {
            return <Carded 
              key={posts._id}
              postname={posts.title}
            children={posts.body} />
          }) : null}
        </section>
      </div>
    );
  };
};
