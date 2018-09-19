import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import './App.css';

//We may have to overhaul some components and def the pages,
//But, this gives us a great starting point
//

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
            <Route component={Home} />
          </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
