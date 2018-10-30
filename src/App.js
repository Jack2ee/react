import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import SingleSearch from './containers/SingleSearch/SingleSearch';
import MultiSearch from './containers/MultiSearch/MultiSearch';
import LogIn from './containers/LoginSign/Login/Login';
import About from './containers/About/About';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/SingleSearch" exact component={SingleSearch} />
          <Route path="/MultiSearch" exact component={MultiSearch} />
          <Route path="/About" exact component={About} />
          <Route path="/LogIn" exact component={LogIn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
