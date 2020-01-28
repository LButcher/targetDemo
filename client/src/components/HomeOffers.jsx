import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import OfferCard from './OfferCard';
import offer1 from '../images/offer1.jpg';
import offer2 from '../images/offer2.jpg';
import offer3 from '../images/offer3.jpg';


class HomeOffers extends Component {


    render() {
        return (
            <div className="offers-container">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <OfferCard img={offer1}
                        offerTitle={"Insurance"}
                        offerContent={"We offer the best life, auto and home insurance."}
                        offerButtonContent={"Explore"}
                        link={"/insurance"}
                        ></OfferCard>
                    </Grid>
                    <Grid item xs={4}>
                        <OfferCard img={offer2}
                        offerTitle={"Banking"}
                        offerContent={"Explore our fantastic chequing and savings accounts."}
                        offerButtonContent={"Explore"}
                        link={"/banking"}></OfferCard>
                    </Grid>
                    <Grid item xs={4}>
                        <OfferCard img={offer3}
                        offerTitle={"Investing"}
                        offerContent={"Explore the different investing options we provide."}
                        offerButtonContent={"Explore"}
                        link={"/investing"}></OfferCard>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default HomeOffers;