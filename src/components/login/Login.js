import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

import LoginBackground from '../../assets/background_login.png'
import Logo from '../../assets/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const drawerWidth = 240;

const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
};

const styles = theme => ({

    root: {
        display: 'flex',
        minHeight: '100vh' 
    },
    background: {
        display: "flex",
        //background: '#333745', //Onyx
        backgroundImage: "url("+LoginBackground+")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        flexGrow: 1,
        padding: 0,
        height: '100',
    },
    content: {
        display: "flex",
        height: '100%',
        width: '100%',
        backgroundColor: hex2rgba('#4a148c', .85)
    },

    content_header: {
        display: 'inline'
    },

    content_footer: {
        textAlign: 'center',
        display: 'inline',
        paddingTop: 50,
    },

    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        height: 200,
    },

    item: {
        textAlign: 'center',
        padding: theme.spacing(0),
        margin: 0,
    },

    title_logo: {
        color: '#fff',
        fontSize: 50,
        fontFamily: 'Gabriola',
        fontStyle: 'bold'
    },

    subtitle_logo: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'Gabriola'
    },

    facebook_icon: {
        color: '#fff',
        fontSize: 7,
        textDecoration: 'none',
    },

    social_button: {
        textAlign: 'center',
        padding: theme.spacing(1),
        margin: 10,
    }
});

class Login extends Component{

    render(){
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>
                <main className={classes.background}>
                    <div className={classes.content}>
                        <Grid container>
                            <Grid xs={12} md={12} container item justify="center" alignItems="center" space={0} className={classes.content_header}>
                                <Grid item md={12} xs={12} className={classNames(classes.item, classes.logo)}>
                                    <img  src={Logo} ></img>
                                </Grid>
                                <Grid item md={12} xs={12} className={classNames(classes.item, classes.title_logo)}>
                                    Maskarapp
                                </Grid>
                                <Grid item md={12} xs={12} className={classNames(classes.item, classes.subtitle_logo)}>
                                    Cuenca, EC
                                </Grid>
                            </Grid>
                            <Grid xs={12} md={12} container item justify="center" alignItems="center" className={classes.content_footer}>
                                <Grid item xs={12} md={12} >
                                    <Button variant="contained"  color="primary"
                                        startIcon={<FacebookIcon /> } className={classNames(classes.social_button, classes.facebook_icon)}
                                    > 
                                        <Link to="/Home" className={classes.facebook_icon}>
                                            Inicia sesión con Facebook
                                        </Link>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Button variant="contained"  color="secondary"
                                        startIcon={<InstagramIcon /> } className={classNames(classes.social_button, classes.facebook_icon)}
                                    >
                                        Inicia sesión con Instagram
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </div>
                </main>
            </div>
        );

    }

}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Login);

