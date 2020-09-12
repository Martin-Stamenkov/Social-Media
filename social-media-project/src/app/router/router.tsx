import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from '../../screens/auth/sign-in/sign-in';
import { SignUp } from '../../screens/auth/sign-up/sign-up';

export const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/sign-in" exact component={SignIn}></Route>
        <Route path="/sign-up" exact component={SignUp}></Route>
      </Switch>
    </>
  );
};
