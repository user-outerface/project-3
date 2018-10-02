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
      searchQ: ''
    };
  };

  handleTermChange = (event) => {
    API.handleTermChange(event.target.value)
      .then(res => {
        this.setState({
          gifs: [res]
        });
      });
  };

  formPeeker = () => {
    console.log(this.state.searchQ);
    this.setState({
      searchQ: ''
    })
  };

  searchChange = (event) => {
    const { target: { name, value } } = event;
    console.log("hit search change", "[" + name + "isName", value)
    this.setState({
      [name]: value
    });
  };



  render() {
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
          <Nav />
          <BuildaNav />
          <Switch>
            <Route exact path="/" render={(props) =>  <Main dbHit="genres" />} />
            <Route exact path="/posts" render={(props) =>  <Main dbHit="posts" />} />
            <Route exact path="/new-post" render={(props) => <NewPost /> } />
            <Route component={Main} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
