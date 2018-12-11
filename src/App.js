import React, { Component } from 'react';
import { connect } from 'react-redux';
import Congrats from './Congrats';
import Input from './Input';
import GuessedWords from './GuessedWords';

import { getSecretWord } from './actions';

import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto App</h1>
        <div> The secret word is: {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };

  // success: state.success,
  // guessedWords: state.guessedWords,
  // secretWord: state.secretWord


}

export default connect(mapStateToProps, { getSecretWord })(App); 
