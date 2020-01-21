import React, { Component } from 'react';
import HomeOffers from './HomeOffers';


class Home extends Component {
  
  render() {
    return (
      <div className="home-container">
        <div className="banner-container">
          <img src={this.props.banner}></img>
        </div>
        <HomeOffers></HomeOffers>
      </div>
    );
  }
}

export default Home;


