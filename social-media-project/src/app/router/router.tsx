import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from '../../screens/auth/sign-in/sign-in';
import { SignUp } from '../../screens/auth/sign-up/sign-up';
import { getMe } from 'store/actions/authActions';
import { UserDetails } from 'components/domain/userDetails/user-details';

export const Router = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.user);
  const userId = localStorage.getItem('user');
  console.log(user);

  console.log(userId);
  useEffect(() => {
    if (userId) {
      dispatch(getMe());
    }
  }, []);
  const isAuth = true;

  return (
    <>
      {isAuth ? (
        <Switch>
          <Route path="/profile" exact component={UserDetails} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/sign-in" exact component={SignIn}></Route>
          <Route path="/sign-up" exact component={SignUp}></Route>
        </Switch>
      )}
    </>
  );
};
