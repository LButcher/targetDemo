import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ProductBar from './components/ProductBar';
import Insurance from './components/Insurance';
import Banking from './components/Banking';
import Investing from './components/Investing';
import Login from './components/Login';
import {
  Switch,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import banner from './images/family.jpg'
import insuranceBanner from './images/insuranceBanner.jpg'



class App extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "",
    user:{}    };
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.getUserByCookie();
  }

  /*componentDidUpdate(){
    this.getUserByCookie();
  }*/



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
      else{
        this.setState({user: {}})
      }
  }

  setUser = (userId) => {
    console.log("setting");
    document.cookie = "userId=" + userId;
    this.getUserByCookie();
};

  render() {
    let user = this.state.user;
    window.user = user;
    window.dataLayer.user = this.state.user;
    window._satellite.track('render');

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
              setUser={this.setUser}
              {...props} />}
            />
            <Route exact path="/insurance" render={(props) => <Insurance
              banner={insuranceBanner}
              {...props} />}
            />
            <Route exact path="/banking" render={(props) => <Banking
              banner={insuranceBanner}
              {...props} />}
            />
            <Route exact path="/investing" render={(props) => <Investing
              banner={insuranceBanner}
              {...props} />}
            />

            <Route exact path="/insurance/life"><h1>Life Insurance</h1></Route>
            <Route exact path="/insurance/auto"><h1>Auto Insurance</h1></Route>
            <Route exact path="/insurance/home"><h1>Home Insurance</h1></Route>
            
            <Route exact path="/banking/chequing"><h1>Chequing Accounts</h1></Route>
            <Route exact path="/banking/savings"><h1>Savings Accounts</h1></Route>
            <Route exact path="/banking/credit"><h1>Credit Cards</h1></Route>


          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;