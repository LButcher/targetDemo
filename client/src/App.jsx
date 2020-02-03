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
    this.targetView = this.targetView.bind(this);
  }

  componentDidMount() {
    this.loadTargetProfileInfo();
    this.getUserByCookie();
  }

  loadTargetProfileInfo(){
    fetch('/api/loadUsers')
        .then(res =>
          res.json())
        .then(users => {
          this.setState({users: users})
          console.log("loaded target profile data");
        })
        .catch(e => console.log(e));
  }

  getUserByCookie() {
    //Shamelessly ripped from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    var cookieVal = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if(cookieVal){

      window.targetPageParams = function(){
          return {
            mbox3rdPartyId: cookieVal
          }
      }

    fetch('/api/user/' + cookieVal)
        .then(res =>
          res.json())
        .then(user => {
          this.setState({ user: user });
        })
        .catch(e => console.log(e));
      }
      else{
        window.targetPageParams = function(){
          return {
            mbox3rdPartyId: 0
          }
      }
        this.setState({user: {}})
      }
  }

  setUser = (userId) => {
    document.cookie = "userId=" + userId;
    this.getUserByCookie();
};

targetView(pageName){
  if(window.adobe && window.adobe.target){
    window.adobe.target.triggerView(pageName);
  }
}

  render() {
    let user = this.state.user;
    let users = this.state.users;
    window.dataLayer.user = this.state.user;


    return (
      <div className="App">

        <BrowserRouter>
          <NavBar name={(user && Object.keys(user).length > 0) ? user.name : undefined}
          targetView={this.targetView}
          >
          </NavBar>
          <ProductBar></ProductBar>
          <Switch>
            <Route exact path="/" render={(props) => <Home
              banner={banner}
              {...props} />} />
            <Route exact path="/login" render={(props) => <Login
              user={user}
              users={users}
              setUser={this.setUser}
              targetView={this.targetView}
              {...props} />}
            />
            <Route exact path="/insurance" render={(props) => <Insurance
              banner={insuranceBanner}
              targetView={this.targetView}
              {...props} />}
            />
            <Route exact path="/banking" render={(props) => <Banking
              banner={insuranceBanner}
              targetView={this.targetView}
              {...props} />}
            />
            <Route exact path="/investing" render={(props) => <Investing
              banner={insuranceBanner}
              targetView={this.targetView}
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