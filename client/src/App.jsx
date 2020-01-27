import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ProductBar from './components/ProductBar';
import Login from './components/Login';
import {
  Switch,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import banner from './images/family.jpg'



class App extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getUserByCookie();
  }

  getUserByCookie() {
    //Shamelessly ripped from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    var cookieVal = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if(cookieVal){
    fetch('/api/user/' + cookieVal)
        .then(res =>
          res.json())
        .then(user => {
          this.setState({ user: user });
        })
        .catch(e => console.log(e));
      }
  }


  render() {
    let user = this.state.user;
    window.user = user;

    return (
      <div className="App">

        <BrowserRouter>
          <NavBar name={(user && Object.keys(user).length > 0) ? user.name : undefined}>
          </NavBar>
          <ProductBar></ProductBar>
          <Switch>
            <Route exact path="/" render={(props) => <Home
              banner={banner}
              {...props} />} />
            <Route exact path="/login" render={(props) => <Login
              user={user}
              {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;