import React, { Component } from 'react';
// import TextLay from '../components/SearchForm/TextLay';
// import Button from "../components/Button/Button";
import Carded from "../components/Carded";
// import AnchorTag from "../components/AnchorTag/AnchorTag";
// import Saved from "./Posts";
import API from "../utils/API";
import "./pages.css";
import { AnchorTag } from '../components/AnchorTag/AnchorTag';

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
    if(this.props.populate){
      this.props.populate();
    };
  };

  componentDidUpdate(prevProps){
    if(this.props.populate && prevProps.hitType !== this.props.hitType){
      this.props.populate();
    };
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
        className="carded-opaque text-white text-left rounded-0"
      />);
      return tested;
    });
    return (
      <div className="Page">
        <h3 className="my-1 text-white">Welcome!</h3>

        <section className="mb-3">
          {res !== undefined ? res[0] && res[0].map(posts => {
            return <Carded 
              key={posts._id}
              className="carded-opaque text-white text-left rounded-0"
              postname={posts.title ? posts.title : <AnchorTag href={"./posts/t&gq=" + posts.genre} children={posts.genre} /> }
            children={posts.body ? posts.body : null } />
          }) : null}
        </section>
      </div>
    );
  };
};
