import React from 'react';
import avatar from 'assets/avatar.png';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { useStyles } from './user-details.styles';
import { Button, Grid, Icon, Typography } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
export const UserDetails = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <div className={classes.root}>
          <img className={classes.avatar} alt="avatar" src={avatar} />
          <div className={classes.info}>
            <div>
              <Typography variant="h6">Martin Stamenkov</Typography>
              <Button
                variant="contained"
                color="primary"
                endIcon={<EditOutlinedIcon />}
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};
