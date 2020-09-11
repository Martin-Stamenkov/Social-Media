import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <h3>
          Create the layout for your application by taking inspiration from
          reddit, facebook, twitter etc.
        </h3>
        <h3>
          It would be nice if you can also implement some of your own generic
          components (Buttons, TextInputs etc.)
        </h3>
        <h3>
          Replace the contents of this file with whatever you come up with.
        </h3>
        <h3>Happy Coding! :)</h3>
        <h4>PS: Don't forget to read the React docs!</h4>
        <img width="60px" height="60px" src={logo} alt="Logo" />
      </div>
    );
  }
}

export default App;
