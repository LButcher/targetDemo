import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ProductBar from './components/ProductBar';
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
import banner from './images/family.jpg'



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
  .then(res => {res.json();})
  .then(user => {
      this.setState({ user: user });
})
  .catch(e => console.log(e));
}
  
  render() {
    let user = this.state.user;
    console.log("test"+window.dataLayer);
    return (
      <div className="App"> 
        
        <BrowserRouter>
        <NavBar name={user ? user.name : undefined}>
        </NavBar>
        <ProductBar></ProductBar>
          <Switch>
            <Route exact path="/" render={(props)=> <Home 
            banner={banner}
             {...props}/>} />
            <Route exact path="/login" render={(props)=> <Login user={user} {...props}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;