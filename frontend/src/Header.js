import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    title_name: {

    },
}));

function Header(props) {
    const classes = useStyles();
    return (
        <div className={classes.grow} >
            <AppBar position="static" color={'inherit'} style={{background: "#B80014"}}>
                <Toolbar >
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/" underline={"none"} className={classes.title_name} style={{textDecoration: 'none', color: "white"}} onClick={props.handler2}>
                            Herzlich Willkommen {props.name}!
                        </Link>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Icon
                            edge="end"
                            color="inherit"
                            style={{color: "white"}}>
                            <AccountCircle />
                        </Icon>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;