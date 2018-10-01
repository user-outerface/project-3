import React, { Component } from 'react';
// import TextLay from '../components/SearchForm/TextLay';
import Button from "../components/Button/Button";
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

  // genreWriter = () =>{
  //   const genreTaker = window.location.pathname.split("/");
  //   let genreGiver;
  //   for(let i = 0; i < genreTaker.length; i++){
  //     if(genreTaker[i].includes("t&gq=")){
  //       genreGiver = genreTaker[i].substr(genreTaker[i].indexOf("=") + 1);
  //       console.log(genreGiver);
  //       return genreGiver;
  //     } else {
  //       genreGiver = "";
  //       console.log(genreGiver);
  //       return genreGiver;
  //     };
  //   };
  //   return genreGiver;
  // };

  componentDidMount(){
    if(this.props.populate){
      this.props.populate();
    } else if (this.props.secondPopulate){
      this.props.secondPopulate();
    };
  };

  componentDidUpdate(prevProps){
    if(this.props.populate && prevProps.hitType !== this.props.hitType){
      this.props.populate();
    } else if (this.props.secondPopulate && prevProps.hitType !== this.props.hitType){
      this.props.secondPopulate();
    };
  };

  render() {
    let res = this.props.dbHit;
    const postPass = window.location.pathname.split("/");
    let postSwitch = null;
    let genreGiver;
    for(let i = 0; i < postPass.length; i++){
      if(postPass[i].includes("tpm&n=")){
        postSwitch = postPass[i].substr(postPass[i].indexOf("=") + 1);
      };
      if(postPass[i].includes("t&gq=")){
        genreGiver = postPass[i];
      } else if (genreGiver === undefined){
        genreGiver = "";
      };
    };
    return (
      <div className="Page">
        <h3 className="my-1 text-white">Welcome!</h3>

        <section className="mb-3">
          {((res !== undefined) && (this.props.nonSpec)) ? res[0] && res[0].map(posts => {
            return <Carded 
              key={posts._id}
              className="carded-opaque text-white text-left rounded-0"
              postname={posts.title ? <AnchorTag href={window.location + "/tpm&n=" + posts._id} children={posts.title} /> : <AnchorTag href={"./posts/t&gq=" + posts.genre} children={posts.genre} /> }
            children={posts.body ? posts.body : null } />
          }) : null}

          {((res !== undefined) && (!this.props.nonSpec)) ? res && res.map(post => {
            return <Carded 
              key={post._id}
              className="carded-opaque text-white text-left rounded-0"
              postname={post.title}
            children={post.body ? post.body : null } />
          }) : null}

          <Button hrefless="true" onClick={(event) =>this.props.changeLocs(event)} attribsext={{"data-pathing": "/new-post/" + genreGiver}} children="New Post" />
        </section>
      </div>
    );
  };
};
