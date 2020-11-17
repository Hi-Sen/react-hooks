
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import async_fun from "./async"

/*   
  hook-demo 路由   
*/
let App = async_fun(() => require('../App.js'));
let Home = async_fun(() => require('../page/home'));
let Home2 = async_fun(() => require('../page/home/index_components'));

/*
  link 路由 
*/
let Demo1 = async_fun(() => require('../page/content/demo1'));
let Hook = async_fun(() => require('../page/content/hook'));
let Redux = async_fun(() => require('../page/content/redux'));


function router () {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home_two" component={Home2} />
      {/* link router */}
      <Route exact path="/demo1" component={Demo1} />
      <Route exact path="/hook" component={Hook} />
      <Route exact path="/redux" component={Redux} />

    </Router>);
}

export default router;
