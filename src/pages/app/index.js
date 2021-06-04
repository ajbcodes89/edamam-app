import React from "react";
import "./App.scss";

import Nav from '../../components/nav';
import Recipes from '../recipes';
import Splash from '../loginSplash';
import Users from '../user';


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router> 
  <div className="App">
    <Nav />
    <Switch>
    <Route path="/" exact component={Recipes} />
    <Route path="/splash" component={Splash} />
    <Route path="/users" component={Users} />
  </Switch>
  </div>
  </Router>
  );
}

export default App;

