import React, { Component } from 'react';
import {
  Button,
}
  from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import UserDetails from './UserDetails';


class UserTile extends Component {

    constructor(props) {
        super(props);
      }

  setUser = (userId) => {

    document.cookie = "userId=" + userId;
  };



  getCurrentUser() {

    //Shamelessly ripped from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    return document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }

  tooltipContent(userId) {
    if(userId==1){
        return "one";
    }
    else if(userId==2){
        return "two";
    }
    else if(userId==3){
        return "three";
    }
    else {
        return "no data";
    }
  }

  render() {

    return (
      <div>
        <Paper className="login-option">
            <Grid container wrap="nowrap" spacing={4}>
              <Grid item>
                    <UserDetails init={this.props.init} color={this.props.color} tooltip={this.tooltipContent(this.props.userId)}></UserDetails>
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


