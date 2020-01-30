import React, { Component } from 'react';
import {
  Button,
}
  from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UserDetails from './UserDetails';
import {
  Link
} from 'react-router-dom';


class UserTile extends Component {

    constructor(props) {
        super(props);
        this.state = {};
      }


  getCurrentUser() {

    //Shamelessly ripped from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    return document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }

  makeTooltip(){
    let userInterests = {};
    if(this.props.user && Object.keys(this.props.user).length > 0){
        userInterests = this.props.user.interests;
      }
      return JSON.stringify(userInterests);
  }

  render() {
    let userDetails = this.makeTooltip();

    //Don't render the child components unless we have our user details
    if(!this.props.user){
        return <div />;
    }
    console.log("***");
    console.log(this.props);
    console.log("***");
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
                {(this.props.userId == this.props.user.userId) ? 
                
                                (
                                  <Link to={'/'}><Button variant="outlined" onClick={()=>this.props.setUser("")} color="inherit" className="login">Logout</Button>
                                  </Link>)
                :
                (                
                  <Link to={'/'}>                <Button variant="outlined" onClick={()=>this.props.setUser(this.props.userId)} color="inherit">Login</Button>
                  </Link>
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


