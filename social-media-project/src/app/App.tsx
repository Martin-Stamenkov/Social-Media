import React from 'react';
import { NavBar } from 'components/header/header';
import { SignUp } from 'screens/auth/sign-up/sign-up';

const App = () => {
  {
    return (
      <div>
        <NavBar />
        <SignUp />
      </div>
    );
  }
};

export default App;
