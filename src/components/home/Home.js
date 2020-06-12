import React, { useState, Component } from 'react';
import clsx from 'clsx';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';

import imageOne from '../../assets/img1.jpeg'
import imageTwo from '../../assets/img2.jpeg'
import imageThree from '../../assets/img3.jpg'
import imageFour from '../../assets/img5.jpg'

import CountDown from './Countdown'


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
        background: '#212121',
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
        //backgroundColor: hex2rgba('#4a148c', .85)
    },

    content_header: {
        display: 'inline',
        paddingTop: 50,
    },

    content_footer: {
        textAlign: 'center',
        display: 'inline',
        paddingTop: 50,
    },

    item: {
        textAlign: 'center',
        padding: theme.spacing(0),
        margin: 0,
    },

    title_home: {
        position: 'absolute',
        top: 333,
        left: 0,
        right: 0,
        textAlign: 'center',
        margin: 'auto',
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Gabriola',
        fontStyle: 'bold',
        backgroundColor: hex2rgba('#000000', .75)
    },

    subtitle_home: {
        position: 'absolute',
        top: 375,
        left: 0,
        right: 0,
        textAlign: 'center',
        margin: 'auto',
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Gabriola',
        backgroundColor: hex2rgba('#000000', .75)
    },

    subtitle_countdown: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Gabriola'
    },

    facebook_icon: {
        color: '#fff',
        fontSize: 12,
        textDecoration: 'none',
    },

    social_button: {
        textAlign: 'center',
        padding: theme.spacing(1),
        margin: 20,
        width: "50%"
    },

    carousel: {
        display: "flex",
        textAlign: 'center',
        height: 350,
        width: 360,
        backgroundColor: 'navy',
        margin: 'auto'
        //backgroundColor: hex2rgba('#4a148c', .85)
    },

    img: {
        textAlign: 'center',
        width: 360,
        height: 350,
    },
// #############################################################################

    appBar: {
        background: '#010F24', // Rich Black
        color: '#cdcdcd', // Pastel Grey
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {

    },

    hide: {
        display: 'none',
    },

    drawer: {
        color: '#0B6E4F', // Bottle Green
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
    },

    drawerPaper: {
        width: drawerWidth,
        background: '#0F213A', // Maastricht Blue
        overflowX: 'hidden',
        maxHeigth: '100 !important',
    },

    toolbar: {
        background: '#010F24', // Rich Black
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },

    menuText: {
        color: '#cdcdcd', // Pastel Grey
        textDecoration: 'none',
    },

    selected: {
        borderLeft: '3px solid #0F213A', // Maastricht Blue
        background: '#010F24 !important', // Rich Black
        borderColor: '#0B6E4F', // Bottle Green
    },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    content_navbar: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: -drawerWidth,
    },

});

class Home extends Component{

    options = [
        'Home',
        'Galeria',
        'En vivo',
        'Configuración',
    ]

    optionIcons = [
        <HomeIcon />,
        <PhotoLibraryIcon/>,
        <VideocamIcon />,
        <SettingsIcon />,
    ]

    optionsPath = [
        '/home',
        '/galery',
        '/live',
        '/settings',
    ]

    state = {
        open: false,
        selectedIndex: 0
    };

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render(){
        const {classes, theme} = this.props;

        const currentDate = new Date();
        const year = (currentDate.getMonth() > 0 && currentDate.getDate() > 6) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    className={classes.drawer}
                    classes={{paper: classes.drawerPaper }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton className={classes.menuText} onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List >
                        {this.options.map((text, index) => (
                            <ListItem
                                selected={index === this.state.selectedIndex}
                                onClick={event => this.handleListItemClick(event, index)}
                                button key={text}
                                classes={{ selected: classes.selected }}
                            >
                                <ListItemIcon className={classes.menuText} >
                                    {this.optionIcons[index]}
                                </ListItemIcon>
                                
                                <Link to={this.optionsPath[index]} className={classes.menuText}>
                                    <ListItemText
                                        classes={{
                                            primary: classes.menuText,
                                        }}
                                        primary={text}
                                    />
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main className={classNames(classes.background, classes.content_navbar, {
                    [classes.contentShift]: this.state.open,
                })}>
                    <div className={classes.drawerHeader} />
                    <div className={classes.content}>
                        <Grid container>
                            <Grid xs={12} md={12} container item justify="center" alignItems="center" space={0} className={classes.content_header}>
                                <Grid item md={12} xs={12} >
                                    <Carousel className={classes.carousel}
                                        autoPlay={4000}
                                        animationSpeed={1000}
                                        infinite
                                    >
                                        <img className={classes.img} src={imageOne} />
                                        <img className={classes.img} src={imageTwo} />
                                        <img className={classes.img} src={imageThree} />
                                        <img className={classes.img} src={imageFour} />
                                    </Carousel>
                                </Grid>
                                <Grid item md={12} xs={12} className={classNames(classes.title_home)}>
                                    Mascaradas Cuenca, Ecuador
                                </Grid>
                                <Grid item md={12} xs={12} className={classNames(classes.subtitle_home)}>
                                    Próximo 6 de enero del 2021
                                </Grid>
                                <Grid item md={12} xs={12} className={classNames(classes.item, classes.subtitle_countdown)}>
                                  <CountDown date={`${year}-01-06T00:00:00`} />
                                </Grid>
                                <Divider style={{ backgroundColor: '#fff' }} variant="middle" />
                                <Grid item xs={12} md={12} className={classNames(classes.item)}>
                                    <Button variant="contained"  color="primary" 
                                    className={classNames(classes.social_button, classes.facebook_icon)}
                                    > 
                                        <Link to="/Galery" className={classes.facebook_icon}>
                                            Explora el evento
                                        </Link>
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

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);

