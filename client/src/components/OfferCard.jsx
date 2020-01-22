import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import lizard1 from '../images/lizard1.jpg'
import lizard2 from '../images/lizard3.jpg'
import lizard3 from '../images/lizard4.jpg'



class OfferCard extends Component {


    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        className="card-media crazy-img"
                        image={this.props.img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.offerTitle}
          </Typography >
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.offerContent}
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="primary" style={{marginLeft: "auto"}}>
                        {this.props.offerButtonContent}
        </Button>
                </CardActions>
            </Card>
        );
    }
}

export default OfferCard;