import React, { Component } from 'react';
import {
  Button,
}
  from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import UserTile from './UserTile';


class Login extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <h1>Login</h1>
        <div className="accounts-container">
          <UserTile color="rgb(76,175,80)" init="BS" userName="Bob Smith" userId="1"></UserTile>
          <UserTile color="rgb(255,87,34)" init="JS" userName="John Smith" userId="2"></UserTile>
          <UserTile color="rgb(233,30,99)" init="JS" userName="Jane Smith" userId="3"></UserTile>
        </div>
      </div>
    );
  }
}

export default Login;


