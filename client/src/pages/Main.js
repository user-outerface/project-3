import React, { Component } from 'react';
// import TextLay from '../components/SearchForm/TextLay';
// import Button from "../components/Button/Button";
import Carded from "../components/Carded";
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

  deleterPost = (nId) =>{
    API.delUpper({
      id: nId,
      body: "[deleted]"
    }).then(window.location.reload());
  };

  render() {
    let res = this.props.dbHit;
    const postPass = window.location.pathname.split("/");
    let genreGiver;
    for(let i = 0; i < postPass.length; i++){
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
              extchildren={<div>
                <AnchorTag href={"/edit-post/tbph&idn" + post._id} children="Edit" editable="true" />
                <AnchorTag onClick={() =>{this.deleterPost(post._id)}} children="Delete" />
              </div>}
            children={post.body ? post.body : null } />
          }) : null}

          <AnchorTag href={"/new-post/" + genreGiver} children="New Post" />
        </section>
      </div>
    );
  };
};
