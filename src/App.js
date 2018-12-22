import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
        </Switch>
      </div>
    );
  }
}

export default App;
