import React, { Component } from 'react';
import {
  Button,
}
  from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UserDetails from './UserDetails';


class UserTile extends Component {

    constructor(props) {
        super(props);
        this.state = {};
      }


      componentDidMount(){
        this.getUserById(this.props.userId);
      }

  setUser = (userId) => {

    document.cookie = "userId=" + userId;
    window.user = userId;
  };



  getCurrentUser() {

    //Shamelessly ripped from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    return document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }

getUserById(userId) {
    fetch('/api/user/' + userId)
        .then(res =>
          res.json())
        .then(user => {
          this.setState({user: user})
        })
        .catch(e => console.log(e));
  }

  makeTooltip(){
    let userInterests;
    if(this.state.user){
        userInterests = this.state.user.interests;
      }
      return JSON.stringify(userInterests);
  }

  render() {
    let userDetails = this.makeTooltip();

    //Don't render the child components unless we have our user details
    if(!this.state.user){
        return <div />;
    }
    return (
      <div>
        <Paper className="login-option">
            <Grid container wrap="nowrap" spacing={4}>
              <Grid item>
                    <UserDetails init={this.props.init} color={this.props.color} tooltip={userDetails}></UserDetails>
              </Grid>
              <Grid item xs={8} className="login-details-container">
                <span className="login-name">{this.props.userName}</span>
              </Grid>
              <Grid item className="login">
                {(this.props.userId == this.getCurrentUser()) ? 
                                (<Button variant="outlined" onClick={() => this.setUser("")} href="/" color="inherit" className="login">Logout</Button>)
                :
                (                <Button variant="outlined" onClick={() => this.setUser(this.props.userId)} href="/" color="inherit">Login</Button>
                ) 
              }
              </Grid>
            </Grid>
          </Paper>
      </div>
    );
  }
}

export default UserTile;

