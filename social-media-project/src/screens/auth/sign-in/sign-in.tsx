import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormControl, Container, Button, Typography } from '@material-ui/core';
import { useStyles } from 'screens/auth/sign-in/sign-in.styles';
import { useHistory, Link } from 'react-router-dom';

interface IState {
  username: string;
  password: string;
  showPassword: boolean;
}

export const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState<IState>({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof IState) => (
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
            labelWidth={68}
          />
        </FormControl>
        <div className={classes.bottom}>
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <div className={classes.link}>
            <FormHelperText>You don`t have an account?</FormHelperText>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
};
