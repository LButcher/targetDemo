import {
    Toolbar,
    AppBar,
    IconButton,
    Typography,
    Button,
}
    from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';

class NavBar extends Component {

    state = { user:"" }

  componentDidMount() {
    this.getValues();
  }

  getValues = () => {
    fetch('/api/getUser')
      .then(res => res.json())
      .then(user => this.setState({ user }));
  }


    render() {
        const user = this.state.user;
        console.log(user);
        return (
            <div className="nav-container">
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6" className="nav-title">
                            Canada Bank
                        </Typography>
                        <Button variant="outlined" href="/login" color="inherit" className="login">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default NavBar;


