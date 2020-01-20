import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import {
  Switch,
  Route,
  Redirect,
  Link,
  withRouter,
  BrowserRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';


class App extends Component {
  // Initialize state
  
  render() {

    return (
      <div className="App">
        <NavBar>
        </NavBar>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;