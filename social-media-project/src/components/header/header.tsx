import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import { useStyles } from './header.styles';
import logo from 'assets/share.png';
import { Grid } from '@material-ui/core';
import { SearchField } from 'components/search-field/search-field';

export const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const isAuth = true;

  return (
    <div className={classes.grow}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Link to="/home">
            <img className={classes.logo} src={logo} alt="Logo" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            Social Media
          </Typography>
          {isAuth ? <SearchField /> : ''}
          <div className={classes.grow} />
          <Grid alignItems="center">
            {isAuth ? (
              <Button onClick={() => history.push('sign-in')} color="inherit">
                Log Out
              </Button>
            ) : (
              <>
                <Button onClick={() => history.push('sign-up')} color="inherit">
                  Sign Up
                </Button>
                |
                <Button onClick={() => history.push('sign-in')} color="inherit">
                  Sign In
                </Button>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
