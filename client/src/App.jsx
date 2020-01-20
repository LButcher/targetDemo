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
  constructor(props) {
    super(props);
    this.state = {};
  }

componentDidMount() {
  this.getUser();
}

 getUser(){
fetch('/api/user')
  .then(res => res.json())
  .then(userId => {
      this.setState({ userId: userId })
})
  .catch(e => console.log(e));
}
  
  render() {
    const userId = this.state.userId;
    console.log(userId);
    console.log("refeshsfd");
    return (
      <div className="App"> 
        
        <BrowserRouter>
        <NavBar userId={userId}>
        </NavBar>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" render={(props)=> <Login userId={userId} {...props}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;