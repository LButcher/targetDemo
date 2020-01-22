import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



class BannerOffer extends Component {

    render() {
        return (
            <div className="banner-offer-container">
                <div className="banner-offer-content">
                    <h1 className="banner-offer-title">Offer</h1>
                    <div className="banner-offer-details">Offer Content</div>
                    <span className="banner-offer-button">
                        <Button variant="contained" color="secondary" disableElevation>
                            Learn More
        </Button>
                    </span>
                </div>

            </div>
        );
    }
}

export default BannerOffer;