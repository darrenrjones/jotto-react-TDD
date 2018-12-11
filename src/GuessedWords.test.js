import React from 'react';
import { shallow } from 'enzyme';

import GuessedWords from './GuessedWords';
import { findByTestAttr, checkProps } from '../test/testUtils';

//propTypes test
const defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 },
  ]
};

//setup function

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />)
};

it('does not throw warning with expected Props', () => {
  //if this fails you will have to check all components that use GuessedWords component and make sure proper props are passed
  checkProps(GuessedWords, defaultProps);
});

//check if no words have been guessed that guessedWords should have default instructions
describe('no words have been guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  it('should render without error', () => {
    const comp = findByTestAttr(wrapper, 'comp-guessed-words');
    expect(comp.length).toBe(1);
  });

  it('should render instructions', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });

});

// if words have been guessed guessedWords should have table view displaying guessedWords and letterMatchCouunts
describe('there are wordsGuessed', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];

  let wrapper;
  beforeEach(() => {
    wrapper = setup({guessedWords});
  });

  it('should render without error', () => {
    const comp = findByTestAttr(wrapper, 'comp-guessed-words');
    expect(comp.length).toBe(1);
  });

  it('should render guessedWords table section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  it('should display correct number of guessedWords', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
  it('should render number of guesses p', () => {
    const numberOfGuessesNode = findByTestAttr(wrapper, 'guessed-word-count');
    expect(numberOfGuessesNode.length).toBe(1);
  });
});