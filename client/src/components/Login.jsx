import React, { Component } from 'react';
import UserTile from './UserTile';


class Login extends Component {


  render() {
    if(this.props.users){
      let bob = this.props.users.find(user => user.userId == 1);
      let john = this.props.users.find(user => user.userId == 2);
      let jane = this.props.users.find(user => user.userId == 3);
    return (
      <div>
        <h1>Login</h1>
        <div className="accounts-container">
          <UserTile color="rgb(76,175,80)" targetView={this.props.targetView} details={bob} user={this.props.user} init="BS" userName="Bob Smith" userId="1" setUser={this.props.setUser}></UserTile>
          <UserTile color="rgb(255,87,34)" targetView={this.props.targetView} details={john} user={this.props.user} init="JS" userName="John Smith" userId="2" setUser={this.props.setUser}></UserTile>
          <UserTile color="rgb(233,30,99)" targetView={this.props.targetView} details={jane} user={this.props.user} init="JS" userName="Jane Smith" userId="3" setUser={this.props.setUser}></UserTile>
        </div>
      </div>
    );}
    else{
      return (<div></div>)
    }
  }

}

export default Login;


