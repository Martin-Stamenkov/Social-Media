import { InputBase } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './search-field.styled';

export const SearchField = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon color="action" />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};
