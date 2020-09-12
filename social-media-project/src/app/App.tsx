import React from 'react';
import { NavBar } from 'components/header/header';
import { SignUp } from 'screens/auth/sign-up/sign-up';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'app/router/router';

const App = () => {
  {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
