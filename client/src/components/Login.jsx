import React, { Component } from 'react';
import {
  Button,
}
  from '@material-ui/core';

class Login extends Component {

  setUser = (userId) => {
    if(userId!==this.props.userId){
    fetch('/api/user',{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userId: userId})
  })
    .then(res => {
      res.json();
    })
    .catch(e => console.log(e));
  }};


    render() {
      return (
        <div>
          <h1>Login</h1>
          <Button variant="outlined" onClick={()=>this.setUser("1")} href="/" color="inherit" className="login">1</Button>
          <Button variant="outlined" onClick={()=>this.setUser("2")} href="/" color="inherit" className="login">2</Button>
          <Button variant="outlined" onClick={()=>this.setUser("3")} href="/" color="inherit" className="login">3</Button>
        </div>
      );
    }
  }

export default Login;
  

  