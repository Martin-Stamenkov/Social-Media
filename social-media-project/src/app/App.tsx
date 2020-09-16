import React from 'react';
import { NavBar } from 'components/generic/header/header';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'app/router/router';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
