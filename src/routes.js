import React, { Component } from 'react';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';

import Home from './Home';
import Blog from './Blog';
import App from './App';
import Mine from './Mine';
import Item from './Item';
import NoMatch from './component/NoMatch';

class Routes extends React.Component {
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Home} >
          <IndexRoute component={App}/>
          <Route path="blog" component={Blog} />
          <Route path="mine" component={Mine} />
          <Route path='item/:title' component={Item} />
          <Route path='*' component={NoMatch} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
