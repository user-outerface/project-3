import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, NavHead, BuildaNav } from "./components/Nav";
import { Main, Posts, NewPost} from "./pages"
import API from "./utils/API";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      gifs: [],
      term: '',
      posts: [],
      genres: [],
      post: [],
      path: []
    };
  };

  componentDidMount(){
    const pathPass = window.location.pathname.split("/");
    this.setState({
      path: pathPass
    });
  };

  componentDidUpdate(prevProps, prevState){
    const buildPass = window.location.pathname.split("/");
    if(prevState.path.join() !== buildPass.join()){
      this.setState({
        path: buildPass
      })
    };
  };

  getPost = (postQuer) =>{
    API.getPost(postQuer)
      .then(res => {
        this.setState({
          post: res.data
        })
      });
  }

  getPosts = () =>{
      const winPass = window.location.pathname.split("/");
      let winSwitch = null;
      for(let i = 0; i < winPass.length; i++){
        if(winPass[i].includes("t&gq=")){
          winSwitch = winPass[i].substr(winPass[i].indexOf("=") + 1);
        };
      };
      if(winSwitch !== null){
        API.getSomePosts(winSwitch)
          .then(res => {
            this.setState({
              posts: [res.data]
            });
        }).catch(err => {
          console.log(err);
        });
      } else {
        API.getPosts()
            .then(res => {
                this.setState({
                  posts: [res.data]
                });
            }).catch(err => {
              console.log(err);
            });
      };
  };

  getGenres = () =>{
    API.getGenres()
      .then(res => {
        this.setState({
          genres: [res.data]
        });
      });
  }

  handleTermChange = (event) => {
    API.handleTermChange(event.target.value)
      .then(res => {
        this.setState({
          gifs: [res]
        })
      });
  };

  changeLocs = (event) =>{
    const {pathing} = event.target.dataset;
    window.location = pathing;
  };

  render() {
    const postPass = window.location.pathname.split("/");
    let postSwitch = null;
    for(let i = 0; i < postPass.length; i++){
      if(postPass[i].includes("tpm&n=")){
        postSwitch = postPass[i].substr(postPass[i].indexOf("=") + 1);
      };
    };
    return (
      <Router>
        <div className="App">
          <NavHead onChange={this.handleTermChange} gifs={this.state.gifs[0]} />
          <Nav />
          <BuildaNav pather={this.state.path} pOnClick={(event) => this.changeLocs(event)} />
          <Switch>
            <Route exact path="/" render={(props) =>  <Main populate={this.getGenres} dbHit={this.state.genres} hitType="genres" nonSpec />} />
            <Route 
              path="/posts/" 
              render={(props) =>{
                if(postSwitch){
                  return <Main 
                    secondPopulate={() => this.getPost(postSwitch)} 
                    dbHit={this.state.post} 
                  hitType="single-lady" />
                } else {
                  return <Main 
                    populate={this.getPosts} 
                    dbHit={this.state.posts} 
                    nonSpec
                  hitType="posts" />
                }
            }} />
            <Route path="/new-post" render={(props) => <NewPost new /> } />
            <Route path="/edit-post" render={(props) => <NewPost edit /> } />
            <Route component={Main} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
