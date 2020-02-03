import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import OfferCard from './OfferCard';
import offer1 from '../images/offer1.jpg'
import offer2 from '../images/offer2.jpg'
import offer3 from '../images/offer3.jpg'
import BannerOffer from './BannerOffer';


class Insurance extends Component {




    render() {
        window.dataLayer.product = "insurance";
        //window._satellite.track('viewedProduct',{product: 'insurance'})
        
        if(window.adobe && window.adobe.target){
            window.adobe.target.trackEvent({
                "mbox": "target-global-mbox",
                "params": {
                    "user.categoryId": "insurance"
                }
            })
        };

        return (
            <div>
                <h1 className="product-page-title">Insurance</h1>
                <div className="banner-container">
                    <img alt="insurance banner" src={this.props.banner}></img>
                    <BannerOffer ></BannerOffer>
                </div>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <OfferCard img={offer1}
                                offerTitle={"Life Insurance"}
                                offerContent={"Explore our options and find the best life insurance policy for you."}
                                offerButtonContent={"Learn More"}
                                link={"/insurance/life"}
                            ></OfferCard>
                        </Grid>
                        <Grid item xs={4}>
                            <OfferCard img={offer2}
                                offerTitle={"Auto Insurance"}
                                offerContent={"Providing customers with the best auto insurance with the lowest prices."}
                                offerButtonContent={"Learn More"}
                                link={"/insurance/auto"}></OfferCard>
                        </Grid>
                        <Grid item xs={4}>
                            <OfferCard img={offer3}
                                offerTitle={"Home Insurance"}
                                offerContent={"Insure your home and contents with our fantastic policies."}
                                offerButtonContent={"Learn More"}
                                link={"/insurance/home"}></OfferCard>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Insurance;


