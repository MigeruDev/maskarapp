import React, {useState, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import imageOne from '../../assets/background_login.png'
import imageTwo from '../../assets/background_login.png'
import imageThree from '../../assets/background_login.png'

const styles = theme => ({

    root: {
        display: 'flex',
        justifyContent: 'center',
        height: 300,
    },
    content: {
        display: "flex",
        height: 500,
        width: 500,
        //backgroundColor: hex2rgba('#4a148c', .85)
    },

    img: {
        width: 250,
        height: 250,
    }

});

class Carrusel extends Component{


    render(){
        const {classes, theme} = this.props;

        return (
                <Carousel className={classes.carousel}
                    autoPlay={2000}
                    animationSpeed={1000}
                    infinite
                >
                    <img className={classes.img} src={imageOne} />
                    <img className={classes.img} src={imageTwo} />
                    <img className={classes.img} src={imageThree} />
                </Carousel>
    
        );
    }

}



Carrusel.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(Carrusel);