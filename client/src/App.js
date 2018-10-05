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
    // API.getUserPosts("hello");
    API.getCreds().then(res =>{
      const {uId, uNam} = res.data;
      this.setState({
        path: pathPass,
        uId: uId,
        uNam: uNam
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

  getUserPosts = (uId) =>{
    API.getUserPosts(uId)
      .then(res =>{
        this.setState({
          posts: [res.data]
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

  userOut = () =>{
    API.logout().then(res =>{
      this.setState({
        uNam: "",
        uId: ""
      }, window.location.reload());
    })
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
    console.log(this.state.posts);
    const postPass = window.location.pathname.split("/");
    let postSwitch = null;
    for(let i = 0; i < postPass.length; i++){
      if(postPass[i].includes("tpm&n=")){
        postSwitch = postPass[i].substr(postPass[i].indexOf("=") + 1);
      };
    };
    if(window.location.pathname === "/user"){
      window.location = "/";
    };
    return (
      <Router>

        <section>

          <div className="crossfade" >

            <figure></figure>

            <figure></figure>

            <figure></figure>

            <figure></figure>

            <figure></figure>

          </div>

        <div className="App">

          <NavHead 
            sChange={this.searchChange} 
            sValue={this.state.searchQ} 
            sExecute={this.formPeeker}
            sName="searchQ"
            onChange={this.handleTermChange} 
          gifs={this.state.gifs[0]} />
          <h3 className="my-1 title">Welcome to Forum's General {this.props.dbHit}</h3>
          <Nav onChange={this.changer} submitSi={this.makeUser} submitLo={this.logUser} login={this.state.uNam} logout={this.userOut} />
          <BuildaNav pather={this.state.path} pOnClick={(event) => this.changeLocs(event)} />
          <Switch>
            <Route exact path="/" render={(props) =>  <Main user={this.state.uId} username={this.state.uNam} populate={this.getGenres} dbHit={this.state.genres} hitType="genres" nonSpec />} />
            <Route 
              path="/posts/" 
              render={(props) =>{
                if(postSwitch){
                  return <Main 
                    username={this.state.uNam}
                    user={this.state.uId}
                    secondPopulate={() => this.getPost(postSwitch)} 
                    dbHit={this.state.post} 
                  hitType="single-lady" />
                } else {
                  return <Main 
                    username={this.state.uNam}
                    user={this.state.uId}
                    populate={this.getPosts} 
                    dbHit={this.state.posts} 
                    nonSpec
                  hitType="posts" />
                }
            }} />
            <Route exact path="/user/posts" 
              render={(props) =>{
                return <Main username={this.state.uNam}
                  user={this.state.uId}
                  dbHit={this.state.posts}
                  populate={this.getUserPosts}
                  nonSpec 
                  uList
                hitType="user-posts" />
              }
            } />
            {/* <Route /> */}
            <Route path="/new-post" 
              render={
                (props) => 
                  <NewPost 
                    new 
                    user={this.state.uId} 
                  username={this.state.uNam} /> 
              } 
            />
            <Route path="/edit-post" 
              render={
                (props) => 
                  <NewPost 
                    edit 
                    user={this.state.uId} 
                  username={this.state.uNam} /> 
              } 
            />
            {/* <Route path="/images" /> */}
            {/* <Route render={(props) => <Main user={this.state.uId} username={this.state.uNam} />} /> */}
          </Switch>
        </div>
        </section>
      </Router>
    );
  };
};

export default App;
