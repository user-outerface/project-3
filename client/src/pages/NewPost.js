import React, { Component } from 'react';
import TextLay from '../components/SearchForm/TextLay';
import Button from "../components/Button/Button";
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

export class NewPost extends Component {
//   constructor(props){
//     super(props);
//     this.state = {};
//   };

  render() {
    return (
      <div className="Page">
        <h3 className="my-1 text-white">Welcome!</h3>

        <section className="mb-3">
            <Carded id="new-post" 
                cardname="New Post" 
                className="carded-opaque text-white text-left">
                    <TextLay headName="Title" 
                    placeholder="Post Title" />
                    <textarea 
                        headName="Main Body" 
                        className="form-control"
                    placeHolder="Main Body" />
                    <Button children="submit" />

            </Carded>
        </section>
      </div>
    );
  };
};
