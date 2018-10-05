import React, { Component } from 'react';
import TextLay from '../components/SearchForm/TextLay';
import Button from "../components/Button/Button";
import Carded from "../components/Carded";
import Comms from "../components/Comments/Comms"
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
    this.state = {
      comment: "",
      ediComm: "",
      comGo: "false",
      ediGo: "false"
    };
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

  ediGoChange = (comId, comm) => {
    this.setState({
      ediGo: comId,
      ediComm: comm
    });
  };

  commChange = (event)=>{
    const {target: {name, value}} = event;
    this.setState({
      [name]: value
    });
  };

  commSubmit = ()=>{
    let idPass;
    const idPeek = window.location.pathname.split("/");
    for(let i = 0; i < idPeek.length; i++){
      if(idPeek[i].includes("tpm&n=")){
        idPass = idPeek[i].substr(idPeek[i].indexOf("=") + 1);
      }
    };
    const commPass = {
      comment: {comment: this.state.comment},
      id: idPass
    };
    API.saveComm(commPass).then(res =>{
      window.location.reload();
    });
  };

  deleteComm = (id, pId) =>{
    const postPass = {postId: pId, commId: id};
    API.deleteComm(postPass).then(res =>{
      window.location.reload();
    });
  };  

  updateComm = (id) =>{
    const upComPass = {
      id: id,
      comment: this.state.ediComm
    };
    API.upComm(upComPass).then(res =>{
      window.location.reload();
    });
  };

  showField = () =>{
    this.setState({
      comGo: "true"
    })
  }

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
        <section className="mb-3">

          {/*This maps all posts within a given genre*/}
          {/*The anchor tag will need to change if there 
          are deeper url paths, for now it should be fine*/}
          {((res !== undefined) && (this.props.nonSpec)) ? res[0] && res[0].map(posts => {
            return <Carded 
              key={posts._id}
              className="carded-opaque text-white text-left rounded-0"
              postname={posts.title ? <AnchorTag href={`/posts/t&gq=${posts.genre}/tpm&n=${posts._id}`} children={posts.title} /> : <AnchorTag href={"./posts/t&gq=" + posts.genre} children={posts.genre} /> }
            children={posts.body ? posts.body : null } />
          }) : null}
          {/*End mapping of all posts within a given genre*/}

          {/*This maps one post*/}
          {((res !== undefined) && (!this.props.nonSpec)) ? res && res.map(post => {
            return <section key={post._id}>
              <Carded 
                className="carded-opaque text-white text-left rounded-0"
                postname={post.title}
                extchildren={<div>
                  <AnchorTag href={"/edit-post/tbph&idn" + post._id} anchClass="edit-btn" children="Edit" editable="true" />
                  <AnchorTag onClick={() => { this.deleterPost(post._id) }} anchClass="del-btn" children="Delete" />
                </div>}
              children={post.body ? post.body : null } />

              {/*The Below is responsible for mapping the comments 
              And swapping between editing or viewing */}
              {post.comment.length > 0 ? post.comment.map(comms =>{
                return(this.state.ediGo === comms._id ?  
                  <div key={comms._id}>
                    <TextLay hclext="ml-2"
                      value={this.state.ediComm}
                      onChange={this.commChange}
                      classext="bg-opaque"
                      textarea="true"
                      placeholder="Comment (expandable)"
                    name="ediComm" />
                    <Button children="Submit" onClick={() => this.updateComm(comms._id)} />
                    <Button children="Cancel" onClick={() => window.location.reload()} />
                {/* If the state isn't set to allow the comment to be eidited, it gives the basic comment layout */}
                </div> : <Comms key={comms._id}
                    id={comms._id} 
                    edigo={this.state.ediGo}
                  onClickPass={() => this.deleteComm(comms._id, post._id)}>
                  {comms.comment}
                  <Button children="edit" onClick={() => this.ediGoChange(comms._id, comms.comment)} />
                </Comms>)}) : null}
              {/* End mapping of comments */}

              <AnchorTag className="new-com" children="New Comment" onClick={this.showField} />
              {this.state.comGo === "true" &&
                <div>
                  <TextLay hclext="ml-2"
                    value={this.state.comment}
                    onChange={this.commChange}
                    classext="bg-opaque"
                    textarea="true"
                    placeholder="Comment (expandable)"
                  name="comment" />
                <Button className="sub-btn" children="Submit" onClick={this.commSubmit} />
                </div>
              }
            </section>
          }) : null}
          
          {/* End mapping of post */}

          <AnchorTag className="new-pos" href={"/new-post/" + genreGiver} children="New Post" />
        </section>
      </div>
    );
  };
};
