import React, { Component } from 'react';
import {
  Button,
}
  from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

class Login extends Component {


  setUser = (userId) => {
/*
    if (userId !== this.props.userId) {
      fetch('/api/user', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: userId })
      })
        .then(res => {
          res.json();
        })
        .catch(e => console.log(e));
    }*/
    document.cookie = "userId="+userId;
  };


  render() {

    return (
      <div>
        <h1>Login</h1>
        <div className="accounts-container">
          <Paper className="login-option">
            <Grid container wrap="nowrap" spacing={4}>
              <Grid item>
                <Avatar style={{backgroundColor:'rgb(76,175,80)'}}>BS</Avatar>
              </Grid>
              <Grid item xs={8} style={{fontWeight: 'bold'}}>
                Bob Smith
              </Grid>
              <Grid item >
              <Button variant="outlined" onClick={() => this.setUser(1)} href="/" color="inherit" className="login">Login</Button>
              </Grid>
            </Grid>
          </Paper>
          <Paper className="login-option">
            <Grid container wrap="nowrap" spacing={4}>
              <Grid item>
                <Avatar style={{backgroundColor:'rgb(255,87,34)'}}>JD</Avatar>
              </Grid>
              <Grid item xs={8} style={{fontWeight: 'bold'}}>
                John Doe
              </Grid>
              <Grid item>
              <Button variant="outlined" onClick={() => this.setUser(2)} href="/" color="inherit" className="login">Login</Button>
              </Grid>
            </Grid>
          </Paper>
          <Paper className="login-option">
            <Grid container wrap="nowrap" spacing={4}>
              <Grid item>
                <Avatar style={{backgroundColor:'rgb(233,30,99)'}}>JD</Avatar>
              </Grid>
              <Grid item xs={8} style={{fontWeight: 'bold'}}>
                Jane Doe
              </Grid>
              <Grid item>
              <Button variant="outlined" onClick={() => this.setUser(3)} href="/" color="inherit" className="login">Login</Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
        {this.props.user ? <Button variant="filled" onClick={() => this.setUser("")} href="/" color="inherit" className="login">Sign Out</Button> : <div></div>}
        

      </div>
    );
  }
}

export default Login;


