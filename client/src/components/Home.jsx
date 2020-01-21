import React, { Component } from 'react';
import banner from '../images/family.jpg'
import HomeOffers from './HomeOffers';


class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="banner-container">
          <img src={banner}></img>
        </div>
        <HomeOffers></HomeOffers>
      </div>
    );
  }
}

export default Home;


