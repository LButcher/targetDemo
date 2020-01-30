import React, { Component } from 'react';
import UserTile from './UserTile';


class Login extends Component {

  constructor(props) {
    super(props);
  }




  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Login</h1>
        <div className="accounts-container">
          <UserTile color="rgb(76,175,80)" user={this.props.user} init="BS" userName="Bob Smith" userId="1" setUser={this.props.setUser}></UserTile>
          <UserTile color="rgb(255,87,34)" user={this.props.user} init="JS" userName="John Smith" userId="2" setUser={this.props.setUser}></UserTile>
          <UserTile color="rgb(233,30,99)" user={this.props.user} init="JS" userName="Jane Smith" userId="3" setUser={this.props.setUser}></UserTile>
        </div>
      </div>
    );
  }
}

export default Login;


