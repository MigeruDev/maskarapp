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
import data2017 from '../../assets/2017.json';
import data2018 from '../../assets/2018.json';
import data2019 from '../../assets/2019.json';
import data2020 from '../../assets/2020.json';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

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
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import SchoolIcon from '@material-ui/icons/School';
import BrushIcon from '@material-ui/icons/Brush';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { data } from 'jquery';

const drawerWidth = 240;

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

    inline: {
        display: 'inline',
    },

    item_title: {
        color: "#fff",
        fontStyle: 'bold'
    },

    item_subtitle: {
        color: "#9e9e9e"
    },

    item_icon: {
        color: "#fff",
    }


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

        var aux = {
            "2017": [{
                photo: require("../../assets/2017/mascaradas_2017_1.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_1.jpg"),
              }, {
                photo: require("../../assets/2017/mascaradas_2017_2.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_2.jpg"),
              }, {
                photo: require("../../assets/2017/mascaradas_2017_3.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_3.jpg"),
              },{
                photo: require("../../assets/2017/mascaradas_2017_4.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_4.jpg"),
              }, {
                photo: require("../../assets/2017/mascaradas_2017_5.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_5.jpg"),
              }, {
                photo: require("../../assets/2017/mascaradas_2017_6.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_6.jpg"),
              },{
                photo: require("../../assets/2017/mascaradas_2017_7.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_7.jpg"),
              }, {
                photo: require("../../assets/2017/mascaradas_2017_8.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_8.jpg"),
              }, {
                photo: require("../../assets/2017/mascaradas_2017_9.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_9.jpg"),
              },{
                photo: require("../../assets/2017/mascaradas_2017_10.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_10.jpg"),
              }, {
                photo: require("../../assets/2017/mascaradas_2017_11.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_11.jpg"),
              }, {
                photo: require("../../assets/2017/mascaradas_2017_12.jpg"),
                caption: "Mascaradas 2017",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2017/mascaradas_2017_12.jpg"),
              }],
            "2018": [{
                photo: require("../../assets/2018/mascaradas_2018_1.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_1.jpg"),
              }, {
                photo: require("../../assets/2018/mascaradas_2018_2.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_2.jpg"),
              }, {
                photo: require("../../assets/2018/mascaradas_2018_3.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_3.jpg"),
              },{
                photo: require("../../assets/2018/mascaradas_2018_4.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_4.jpg"),
              }, {
                photo: require("../../assets/2018/mascaradas_2018_5.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_5.jpg"),
              }, {
                photo: require("../../assets/2018/mascaradas_2018_6.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_6.jpg"),
              },{
                photo: require("../../assets/2018/mascaradas_2018_7.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_7.jpg"),
              }, {
                photo: require("../../assets/2018/mascaradas_2018_8.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_8.jpg"),
              }, {
                photo: require("../../assets/2018/mascaradas_2018_9.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_9.jpg"),
              },{
                photo: require("../../assets/2018/mascaradas_2018_10.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_10.jpg"),
              }, {
                photo: require("../../assets/2018/mascaradas_2018_11.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_11.jpg"),
              }, {
                photo: require("../../assets/2018/mascaradas_2018_12.jpg"),
                caption: "Mascaradas 2018",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2018/mascaradas_2018_12.jpg"),
              }],
            "2019": [{
                photo: require("../../assets/2019/mascaradas_2019_1.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_1.jpg"),
              }, {
                photo: require("../../assets/2019/mascaradas_2019_2.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_2.jpg"),
              }, {
                photo: require("../../assets/2019/mascaradas_2019_3.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_3.jpg"),
              },{
                photo: require("../../assets/2019/mascaradas_2019_4.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_4.jpg"),
              }, {
                photo: require("../../assets/2019/mascaradas_2019_5.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_5.jpg"),
              }, {
                photo: require("../../assets/2019/mascaradas_2019_6.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_6.jpg"),
              },{
                photo: require("../../assets/2019/mascaradas_2019_7.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_7.jpg"),
              }, {
                photo: require("../../assets/2019/mascaradas_2019_8.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_8.jpg"),
              }, {
                photo: require("../../assets/2019/mascaradas_2019_9.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_9.jpg"),
              },{
                photo: require("../../assets/2019/mascaradas_2019_10.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_10.jpg"),
              }, {
                photo: require("../../assets/2019/mascaradas_2019_11.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_11.jpg"),
              }, {
                photo: require("../../assets/2019/mascaradas_2019_12.jpg"),
                caption: "Mascaradas 2019",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2019/mascaradas_2019_12.jpg"),
              }],
            "2020": [{
                photo: require("../../assets/2020/mascaradas_2020_1.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_1.jpg"),
              }, {
                photo: require("../../assets/2020/mascaradas_2020_2.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_2.jpg"),
              }, {
                photo: require("../../assets/2020/mascaradas_2020_3.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_3.jpg"),
              },{
                photo: require("../../assets/2020/mascaradas_2020_4.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_4.jpg"),
              }, {
                photo: require("../../assets/2020/mascaradas_2020_5.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_5.jpg"),
              }, {
                photo: require("../../assets/2020/mascaradas_2020_6.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_6.jpg"),
              },{
                photo: require("../../assets/2020/mascaradas_2020_7.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_7.jpg"),
              }, {
                photo: require("../../assets/2020/mascaradas_2020_8.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_8.jpg"),
              }, {
                photo: require("../../assets/2020/mascaradas_2020_9.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_9.jpg"),
              },{
                photo: require("../../assets/2020/mascaradas_2020_10.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_10.jpg"),
              }, {
                photo: require("../../assets/2020/mascaradas_2020_11.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_11.jpg"),
              }, {
                photo: require("../../assets/2020/mascaradas_2020_12.jpg"),
                caption: "Mascaradas 2020",
                subcaption: "Photo by @twitter/Cuenca",
                thumbnail: require("../../assets/2020/mascaradas_2020_12.jpg"),
              }],
        } 
        photos = aux[this.state.year];
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

    catIcons = [
        <SchoolIcon/>,
        <BrushIcon/>,
        <ChildFriendlyIcon/>,
        <EmojiPeopleIcon/>
    ]

    optionsPath = [
        '/home',
        '/galery',
        '/live',
        '/settings',
    ]

    years = [
        "2017",
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

    dataEvent = {
        "2017": data2017,
        "2018": data2018,
        "2019": data2019,
        "2020": data2020,
    }

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
                                <Divider style={{ backgroundColor: '#9e9e9e' }} variant="middle" />
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
                                    <List >
                                        {this.dataEvent[this.state.year].categoria.map((cat, index) => (
                                            <ListItem alignItems="flex-start" className={classes.item_title}
                                                key = {cat.cat}
                                            >
                                                <ListItemIcon className={classes.item_icon}>
                                                    {this.catIcons[index]}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={cat.cat}
                                                    secondary={
                                                        <React.Fragment>
                                                            {cat.participantes.map((participante, index) => (
                                                                <Typography
                                                                component="span"
                                                                variant="body2"
                                                                className={classNames(classes.inline, classes.item_subtitle)}
                                                                color="textPrimary"
                                                                >
                                                                    Lugar: {participante.place} <br/>
                                                                    {participante.name} <br/>
                                                                    Premio: {participante.price} <br/><br/>
                                                                </Typography >
                                                            ))}
                                                        </React.Fragment>
                                                    }
                                                />
                                                <Divider variant="inset" component="li" />
                                            </ListItem>
                                        ))}
                                    </List>
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

