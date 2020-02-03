import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import OfferCard from './OfferCard';
import offer2 from '../images/offer2.jpg'
import offer3 from '../images/offer3.jpg'
import credit from '../images/credit.jpg'
import banking from '../images/banking.jpg'
import BannerOffer from './BannerOffer';


class Banking extends Component {

    render() {
        window.dataLayer.product = "banking";
      //window._satellite.track('viewedProduct',{product: 'banking'})

      if(window.adobe && window.adobe.target){
        window.adobe.target.trackEvent({
            "mbox": "target-global-mbox",
            "params": {
                "user.categoryId": "banking"
            }
        })
    };
        return (
            <div>
                <h1 className="product-page-title">Banking</h1>
                <div className="banner-container">
                    <img alt="banking banner" src={banking}></img>
                    <BannerOffer ></BannerOffer>
                </div>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <OfferCard img={offer2}
                                offerTitle={"Chequing Account"}
                                offerContent={"Start a chequing account today and pay no fees for 6 months."}
                                offerButtonContent={"Learn More"}
                                link={"/banking/chequing"}
                            ></OfferCard>
                        </Grid>
                        <Grid item xs={4}>
                            <OfferCard img={offer3}
                                offerTitle={"Savings Account"}
                                offerContent={"Open a no fee savings account today to earn daily interest."}
                                offerButtonContent={"Learn More"}
                                link={"/banking/savings"}></OfferCard>
                        </Grid>
                        <Grid item xs={4}>
                            <OfferCard img={credit}
                                offerTitle={"Credit Card"}
                                offerContent={"Enjoy 4% cashback for 6 months with our new platinum card."}
                                offerButtonContent={"Learn More"}
                                link={"/banking/credit"}></OfferCard>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Banking;


