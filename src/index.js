import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter,Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
        </Switch>
    </BrowserRouter>
  
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
