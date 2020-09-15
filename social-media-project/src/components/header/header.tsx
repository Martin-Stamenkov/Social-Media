import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import { useStyles } from './header.styles';
import logo from 'assets/share.png';
import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { SearchField } from 'components/search-field/search-field';
import { AccountCircle } from '@material-ui/icons';
import avatar from 'assets/avatar.png';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

export const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);
  const isAuth = true;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Avatar alt="avatar" src={avatar} />
      </IconButton>
      <span>Martin Stamenkov</span>
      <Divider></Divider>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => history.push('/profile')}>My Profile</MenuItem>
        <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
      </Menu>

      <SearchField />
      <Divider></Divider>
      <Button onClick={() => history.push('newsfeed')} color="inherit">
        News Feed
      </Button>

      <Divider></Divider>
      <Button onClick={() => history.push('sign-in')} color="inherit">
        Log Out
      </Button>
    </Menu>
  );

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
          <div className={classes.sectionDesktop}>
            <Grid alignItems="center">
              {isAuth ? (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <Avatar alt="avatar" src={avatar} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => history.push('/profile')}>
                      My Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                  </Menu>
                  <Button
                    onClick={() => history.push('newsfeed')}
                    color="inherit"
                  >
                    News Feed
                  </Button>
                  <Button
                    onClick={() => history.push('sign-in')}
                    color="inherit"
                  >
                    Log Out
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    onClick={() => history.push('sign-up')}
                    color="inherit"
                  >
                    Sign Up
                  </Button>
                  |
                  <Button
                    onClick={() => history.push('sign-in')}
                    color="inherit"
                  >
                    Sign In
                  </Button>
                </>
              )}
            </Grid>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
