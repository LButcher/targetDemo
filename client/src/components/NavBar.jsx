import {
    Toolbar,
    AppBar,
    IconButton,
    Typography,
    Button,
}
    from '@material-ui/core';
    
import MenuIcon from '@material-ui/icons/Menu';
import {
    Link
  } from 'react-router-dom';
import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="nav-container">
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6" className="nav-title-container">
                        <Link to={'/home'}>Canada Bank</Link>
                        </Typography>
                        <Link to={'/login'} className="login-container">
                        <Button variant="outlined" color="inherit">
                        {this.props.userId ? this.props.userId : 'Login'}
                            </Button>
                            </Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default NavBar;


