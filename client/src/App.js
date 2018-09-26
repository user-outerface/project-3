import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, NavHead, BuildaNav } from "./components/Nav";
import { Main, Posts} from "./pages"
import './App.css';

//We may have to overhaul some components and def the pages,
//But, this gives us a great starting point
//

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      gifs: [],
      term: ''
    };
  };

  handleTermChange = (event) => {
    this.setState({
      term: event.target.value
    })
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavHead onChange={this.handleTermChange} />
          <Nav />
          <BuildaNav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/posts" component={Posts} />
            <Route component={Main} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
