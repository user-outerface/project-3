import React, { Component } from 'react';
import TextLay from '../components/SearchForm/TextLay';
import Button from "../components/Button/Button";
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

export class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      postTitle: "",
      mainBody: "",
      genre: ""
    };
  };



  postChange = (event) =>{
    const { target: { name, value } } = event;
    this.setState({
        [name]: value
    });
  };

  postSubmit = () =>{
    const {mainBody, postTitle, genre} = this.state;
    API.makePost({
      title: postTitle,
      body: mainBody,
      genre: genre
      //vv make a post submittal confirmation
      //do things here
      //more green for better visibility
    }).then(res => console.log("success " + res, res));

    this.setState({
      postTitle: "",
      mainBody: "",
      genre: ""
    });
  };

  
  cancelPost = () =>{
    if(document.referrer.includes(window.location.host || window.location.hostname)){
      window.history.back();
    } else {
      window.location = "/";
    };
  };

  render() {
    if(this.props.new){console.log("new", this.props.new)};
    if(this.props.edit){console.log("edit", this.props.edit)};
    console.log(this.props.pathPass);
    return (
      <div className="Page">
        <h3 className="my-1 text-white">Welcome!</h3>

        <section className="mb-3">
            <Carded id="new-post" 
                cardname="New Post" 
                className="carded-opaque text-white text-left">
                    <TextLay headName="Genre"
                      hclext="ml-2"
                      name="genre"
                      value={this.state.genre}
                      onChange={this.postChange}
                      classext="bg-opaque"
                    placeholder="Genre" />
                    <TextLay headName="Title"
                      hclext="ml-2"
                      name="postTitle"
                      value={this.state.postTitle}
                      onChange={this.postChange}
                      classext="bg-opaque" 
                    placeholder="Post Title" />
                    <TextLay
                      textarea="true" 
                      headName="Main Body" 
                      hclext="ml-2"
                      name="mainBody"
                      value={this.state.mainBody}
                      onChange={this.postChange}
                      classext="bg-opaque"
                    placeholder="Main Body (expandable)" />
                    <Button children="Submit" onClick={this.postSubmit} />
                    <Button children="Cancel" onClick={this.cancelPost} />

            </Carded>
        </section>
      </div>
    );
  };
};
