import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar.js'
import Introduction from './Introduction.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Introduction />
      </div>
    );
  }
}

export default App;
