import React, { Component } from 'react';
import Congrats from './Congrats';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Congrats success={false}/>
      </div>
    );
  }
}

export default App;
