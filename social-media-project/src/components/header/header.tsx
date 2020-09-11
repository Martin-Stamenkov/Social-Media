import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './header.styles';
import logo from 'assets/share.png';
import { Grid, Link } from '@material-ui/core';

export const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Link href="/home">
            <img className={classes.logo} src={logo} alt="Logo" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            Social Media
          </Typography>
          <Grid alignItems="center">
            <Button color="inherit">Sign Up</Button> |{' '}
            <Button color="inherit">Sign In</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
