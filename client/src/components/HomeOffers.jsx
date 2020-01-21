import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import OfferCard from './OfferCard';
import lizard1 from '../images/lizard1.jpg'
import lizard2 from '../images/lizard3.jpg'
import lizard3 from '../images/lizard4.jpg'


class HomeOffers extends Component {


    render() {
        return (
            <div className="offers-container">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <OfferCard img={lizard1}
                        offerTitle={"lizard1"}
                        offerContent={"lizard facts"}
                        offerButtonContent={"BUY"}
                        ></OfferCard>
                    </Grid>
                    <Grid item xs={4}>
                        <OfferCard img={lizard2}
                        offerTitle={"lizard1"}
                        offerContent={"lizard facts"}
                        offerButtonContent={"BUY"}></OfferCard>
                    </Grid>
                    <Grid item xs={4}>
                        <OfferCard img={lizard3}
                        offerTitle={"lizard1"}
                        offerContent={"lizard facts"}
                        offerButtonContent={"BUY"}></OfferCard>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default HomeOffers;