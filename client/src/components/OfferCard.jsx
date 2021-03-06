import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    Link
  } from 'react-router-dom';



class OfferCard extends Component {


    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        className="card-media"
                        image={this.props.img}
                        title={this.props.offerTitle}
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
                <Link to={this.props.link} style={{marginLeft:'auto'}}>
                    <Button variant="contained" color="primary" style={{marginLeft: "auto"}}>
                        {this.props.offerButtonContent}
        </Button>
        </Link>
                </CardActions>
            </Card>
        );
    }
}

export default OfferCard;