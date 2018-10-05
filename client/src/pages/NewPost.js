import React, { Component } from 'react';
// import TextLay from '../components/SearchForm/TextLay';
// import Button from "../components/Button/Button";
// import Carded from "../components/Carded";
import ContentLay from "../components/ContentLay/ContentLay";
// import AnchorTag from "../components/AnchorTag/AnchorTag";
// import Saved from "./Posts";
// import SignModal from "../components/SignModal/SignModal";
import API from "../utils/API";
import "./pages.css";

export class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      postTitle: "",
      mainBody: "",
      genre: "",
      patid: ""
    };
  };

  componentDidMount(){
    const postPass = window.location.pathname.split("/");
    let genreGiver;
    for(let i = 0; i < postPass.length; i++){
      if(postPass[i].includes("t&gq=")){
        genreGiver = postPass[i].substr(postPass[i].indexOf("=") + 1);
      } else if (genreGiver === undefined){
        genreGiver = "";
      };
    };
    this.setState({
      genre: genreGiver
    });
    if(this.props.edit){
      const idGrab = window.location.pathname.split("/");
      let idPass;
      for(var i = 0; i < idGrab.length; i++){
        if(idGrab[i].includes("tbph&idn")){
          idPass = idGrab[i].substr(idGrab[i].indexOf("n") + 1);
        };
      };
      API.getPost(idPass).then(edP =>{
        const {title, body, genre} = edP.data[0];
        this.setState({
          postTitle: title,
          mainBody: body,
          genre: genre,
          patid: idPass
        });
      });
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
    }).then(res => {
      const {genre, _id} = res.data;
      window.location = `/posts/t&gq=${genre}/tpm&n=${_id}`;
    });
  };

  postEdit = () =>{
    const {mainBody, postTitle, genre, patid} = this.state;
    API.editPost({
      title: postTitle,
      body: mainBody,
      genre: genre,
      id: patid
    }).then(res => {
      const {genre, _id} = res.data;
      window.location = `/posts/t&gq=${genre}/tpm&n=${_id}`;
    });
  }

  
  cancelPost = () =>{
    if(document.referrer.includes(window.location.host || window.location.hostname)){
      window.history.back();
    } else {
      window.location = "/";
    };
  };

  render() {
    return (
      <div className="Page">
        {/* <h3 className="my-1 text-white">Welcome!</h3> */}
        {this.props.new ?
          <ContentLay 
            postChange={this.postChange}
            postTitle={this.state.postTitle}
            mainBody={this.state.mainBody}
            postThings={this.postSubmit}
            cancelPost={this.cancelPost}
          genre={this.state.genre} /> 
        : <ContentLay 
            postChange={this.postChange}
            postTitle={this.state.postTitle}
            mainBody={this.state.mainBody}
            postThings={this.postEdit}
            cancelPost={this.cancelPost}
          genre={this.state.genre} />
        }
      </div>
    );
  };
};
