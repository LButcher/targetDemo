import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import OfferCard from './OfferCard';
import offer1 from '../images/offer1.jpg'
import offer2 from '../images/offer2.jpg'
import offer3 from '../images/offer3.jpg'
import investing from '../images/investing.jpg'
import BannerOffer from './BannerOffer';


class Investing extends Component {




    render() {
        window.dataLayer.product = "investing";
       //window._satellite.track('viewedProduct',{product: 'investing'})
       if(window.adobe && window.adobe.target){
        window.adobe.target.trackEvent({
            "mbox": "target-global-mbox",
            "params": {
                "user.categoryId": "investing"
            }
        })
    };

        return (
            <div>
                <h1 className="product-page-title">Investing</h1>
                <div className="banner-container">
                    <img alt="investing banner" src={investing}></img>
                    <BannerOffer ></BannerOffer>
                </div>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <OfferCard img={offer1}
                                offerTitle={"TFSA"}
                                offerContent={"Start a chequing account today and pay no fees for 6 months."}
                                offerButtonContent={"Learn More"}
                                link={"/investing/tfsa"}
                            ></OfferCard>
                        </Grid>
                        <Grid item xs={4}>
                            <OfferCard img={offer2}
                                offerTitle={"RRSP"}
                                offerContent={"Open a no fee savings account today to earn daily interest."}
                                offerButtonContent={"Learn More"}
                                link={"/investing/rrsp"}></OfferCard>
                        </Grid>
                        <Grid item xs={4}>
                            <OfferCard img={offer3}
                                offerTitle={"Smart Investing"}
                                offerContent={"Use our new robo-advisor Enjoy 4% cashback for 6 months with our new platinum card."}
                                offerButtonContent={"Learn More"}
                                link={"/investing/smart"}></OfferCard>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Investing;


