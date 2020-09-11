import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
  FormControl,
  Container,
  Button,
  Typography,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '5%',
      border: `1px solid ${theme.palette.grey[400]}`,
      borderRadius: 5,
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '10%',
    },
    bottom: {
      margin: '10px 10px 40px',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
      '& a': {
        paddingLeft: 5,
      },
    },
  })
);

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

export const SignIn = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Container maxWidth="sm" className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h5">Sign in</Typography>
        </div>
        <FormControl fullWidth variant="outlined">
          <InputLabel style={{ margin: 10 }} htmlFor="component-outlined">
            Username
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={values.username}
            onChange={handleChange('username')}
            labelWidth={70}
            style={{ margin: 10 }}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel
            style={{ margin: 10 }}
            htmlFor="outlined-adornment-password"
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            style={{ margin: 10 }}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <div className={classes.bottom}>
          <Button
            style={{ width: '100%', marginTop: 10 }}
            size="large"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <div className={classes.link}>
            <FormHelperText>You don`t have an account ?</FormHelperText>
            <Link variant="body2">Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
};
