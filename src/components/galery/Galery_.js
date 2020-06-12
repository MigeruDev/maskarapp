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
import ReactBnbGallery from 'react-bnb-gallery'
import 'react-bnb-gallery/dist/style.css';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import $ from 'jquery';
import jQuery from 'jquery';

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
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';

const drawerWidth = 240;
window.$ = $;

var photos = [{
    photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
    caption: "Viñales, Pinar del Río, Cuba",
    subcaption: "Photo by Simon Matzinger on Unsplash",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  }, {
    photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
    caption: "La Habana, Cuba",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
  }, {
    photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
    caption: "Woman smoking a tobacco",
    subcaption: "Photo by Hannah Cauhepe on Unsplash",
    thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
}];

const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
};

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        backgroundColor: '#80bdff',
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

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

    title_galery: {
        margin: 10,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontStyle: 'bold',
        //backgroundColor: hex2rgba('#000000', .75)
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

    //####################################################
    select_year: {
        alignItems: 'left',
        textAlign: 'left',
        margin: 10,
        marginLeft: 15,
    },

});

class Galery extends Component{

    constructor() {
        super(...arguments);
        this.state = { 
            open: false,
            selectedIndex: 0,
            year: "2020",
            galleryOpened: false,  };
        this.toggleGallery = this.toggleGallery.bind(this);
        this.lookforIMG = this.lookforIMG.bind(this);
    }

    toggleGallery() {
        this.setState(prevState => ({
          galleryOpened: !prevState.galleryOpened
        }));
    }

    lookforIMG() {
        var folder = "../../assets/"+ this.state.year + "/";
        photos = [];

        var aux = {
            "2017": 32,
            "2018": 25,
            "2019": 30,
            "2020": 30,
        } 

        for (let i=1; i< aux[this.state.year]+1; i++){
            aux = folder+"mascaradas_"+this.state.year+"_"+i+".jpg";
            console.log(aux);
            photos.push({
                
                //photo: require(folder+"mascaradas_"+this.state.year+"_"+i+".jpg"),
                photo: require(aux),
                caption: "Mascaradas "+this.state.year,
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: folder+"mascaradas_"+this.state.year+"_"+i+".jpg",
            })
        }

        console.log(photos);
    }

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

    years = [
        "2018",
        "2019",
        "2020"
    ]

    state = {
        open: false,
        selectedIndex: 0,
        year: "2020",
        galleryOpened: false, 
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

    handleChange = (event) =>{
        this.setState({ year: event.target.value });
    }

    render(){
        const {classes, theme} = this.props;

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
                                <Grid item md={12} xs={12} className={classNames(classes.item, classes.title_galery)}>
                                    Mascaradas Cuenca, Ecuador {this.state.year}
                                </Grid>
                                <Divider style={{ backgroundColor: '#fff' }} variant="middle" />
                                <Grid item xs={12} md={12} className={classNames(classes.item, classes.select_year)}>
                                    <FormControl >
                                        <Select
                                            labelId="demo-customized-select-label"
                                            id="demo-customized-select"
                                            value={this.state.year}
                                            onChange={this.handleChange}
                                            input={<BootstrapInput />}
                                        >
                                            {this.years.map((year, index) => (
                                                <MenuItem key={year} value={year}>{year}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item md={12} xs={12} className={classNames(classes.item)}>
                                    Texto
                                </Grid>
                                
                                <Grid item md={12} xs={12} className={classNames(classes.item)}>
                                    <Button variant="contained"  color="primary" onClick={ () => {this.lookforIMG(); this.toggleGallery(); }}
                                    className={classNames(classes.social_button, classes.facebook_icon)}
                                    > 
                                        Abrir Galería {this.state.year}
                                    </Button>
                                    <ReactBnbGallery
                                        show={this.state.galleryOpened}
                                        photos={photos}
                                        onClose={this.toggleGallery} />
                                    <img src={require('../../assets/2020/mascaradas_2020_1.jpg')} />
                                </Grid>

                            </Grid>
                        </Grid>
                    </div>
                </main>
            </div>
        );

    }

}

Galery.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Galery);

