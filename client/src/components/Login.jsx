import React, { Component } from 'react';
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


