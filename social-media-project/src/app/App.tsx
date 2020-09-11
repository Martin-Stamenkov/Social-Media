import React from 'react';
import { NavBar } from 'components/header/header';
import { SignIn } from 'screens/auth/sign-in/sign-in';

const App = () => {
  {
    return (
      <div>
        <NavBar />
        <SignIn />
      </div>
    );
  }
};

export default App;
