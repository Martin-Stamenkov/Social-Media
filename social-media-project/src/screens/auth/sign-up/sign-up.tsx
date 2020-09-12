import React from 'react';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText,
  Link,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useStyles } from '../sign-in/sign-in.styles';

interface IState {
  name: string;
  username: string;
  password: string;
  showPassword: boolean;
}

export const SignUp = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<IState>({
    name: '',
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
          <Typography variant="h5">Sign Up</Typography>
        </div>
        <FormControl fullWidth variant="outlined">
          <InputLabel style={{ margin: 10 }} htmlFor="component-outlined">
            Name
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={values.name}
            onChange={handleChange('name')}
            labelWidth={40}
            style={{ margin: 10 }}
          />
        </FormControl>
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
            <FormHelperText>Already have an account?</FormHelperText>
            <Link variant="body2">Sign In</Link>
          </div>
        </div>
      </Container>
    </>
  );
};
