import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, NavHead, BuildaNav } from "./components/Nav";
import { Main, NewPost} from "./pages"
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
      path: [],
      uId: "",
      uNam: "",
      user: "",
      pwd: ""
    };
  };

  componentDidMount(){
    const pathPass = window.location.pathname.split("/");
    API.getCreds().then(res =>{
      console.log(res);
      this.setState({
        path: pathPass,
        uId: res.uId,
        uNam: res.uNam
      });
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
        });
      });
  };

  changer = (event) =>{
    const {target: {name, value}} = event;
    this.setState({
      [name]: value
    })
  };

  makeUser = () =>{
    const {user, pwd} = this.state;
    const userCreds = {
      username: user,
      password: pwd
    };
    API.signup(userCreds).then(res =>{
      this.setState({
        user: "",
        pwd: ""
      });
      window.location.reload();
    });
  };

  logUser = () =>{
    const {user, pwd} = this.state;
    const userCreds = {
      username: user,
      password: pwd
    };
    API.login(userCreds).then(res =>{
      this.setState({
        user: "",
        pwd: ""
      }); 
      window.location.reload();
    });
  };

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
  };

  handleTermChange = (event) => {
    API.handleTermChange(event.target.value)
      .then(res => {
        this.setState({
          gifs: [res]
        });
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

          <NavHead 
            sChange={this.searchChange} 
            sValue={this.state.searchQ} 
            sExecute={this.formPeeker}
            sName="searchQ"
            onChange={this.handleTermChange} 
          gifs={this.state.gifs[0]} />
          <h3 className="my-1 title">Welcome to Anime Forum {this.props.dbHit}</h3>
          <Nav onChange={this.changer} submitSi={this.makeUser} submitLo={this.logUser} />
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
