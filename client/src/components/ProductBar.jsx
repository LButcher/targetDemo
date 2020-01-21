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

class ProductBar extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <AppBar className="product-bar" position="relative">
                    <Toolbar style={{minHeight: 0}}>
                        <div className="product-container">
                        <Link to={'/login'} className="nav-option">
                        <Button color="inherit">
                                Insurance
                            </Button>
                        </Link>
                        <Link to={'/login'} className="nav-option">
                        <Button color="inherit">
                                Banking
                            </Button>
                        </Link>
                        <Link to={'/login'} className="nav-option">
                        <Button color="inherit">
                                Investing
                            </Button>
                        </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default ProductBar;


