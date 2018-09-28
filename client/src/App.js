import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, NavHead, BuildaNav } from "./components/Nav";
import { Main, Posts, NewPost} from "./pages"
import API from "./utils/API";
import './App.css';

//We may have to overhaul some components and def the pages,
//But, this gives us a great starting point
//

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      gifs: [],
      term: '',
      posts: []
    };
  };

  // componentDidUpdate(){
  //     console.log("mounted");
  //     this.getPosts();
  // };

  // componentDidMount(){
  //   this.getPosts();
  // };

  getPosts = ()=>{
      console.log("pre-hit");
      API.getPosts()
          .then(res => {
              console.log(res);
              console.log("db-hit");
              this.setState({
                posts: [res.data]
              });
          }).catch(err => {
            console.log(err);
          });
  };

  handleTermChange = (event) => {
    API.handleTermChange(event.target.value)
      .then(res => {
        this.setState({
          gifs: [res]
        })
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavHead onChange={this.handleTermChange} gifs={this.state.gifs[0]} />
          <Nav />
          <BuildaNav />
          <Switch>
            <Route exact path="/" render={(props) =>  <Main />} />
            <Route exact path="/posts" render={(props) =>  <Main populate={this.getPosts} dbHit={this.state.posts} />} />
            <Route exact path="/new-post" render={(props) => <NewPost /> } />
            <Route component={Main} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
