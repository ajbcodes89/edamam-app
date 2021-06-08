import React from "react";
import "./App.scss";

import Nav from '../../components/nav';
import Recipes from '../recipes';
import Splash from '../loginSplash';
import Users from '../user';
//import Signup from '../../components/auth/auth';


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router> 
  <div className="App">
    <Nav /> 
    <Switch>
    <Route path="/" exact component={Splash} />
    {/* <Route path="/" exact><h1>testing splash</h1></Route> */}
    <Route path="/recipes" component={Recipes} />
    <Route path="/users" component={Users} />
    
  </Switch>
  </div>
  </Router>
  );
}

export default App;

