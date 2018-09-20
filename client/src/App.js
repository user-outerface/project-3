import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import { Main, Posts} from "./pages"
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
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/posts" component={Posts} />
            <Route component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
