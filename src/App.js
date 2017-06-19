import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Component1 from './components/component1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="header">Sample React</h2>
        <Component1 />
      </div>
    );
  }
}

export default App;
