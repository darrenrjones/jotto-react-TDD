import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';

import App from './App';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
}

describe('redux', () => {

  it('has access to `success` state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  it('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  it('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  it('`getSecretWord` action creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

it('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn(); //jest will be able to see when this is called

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  }

  const UnconnectedApp = App.WrappedComponent; //unconnected version of App
  //setup app component with getSecretWordMock as the getSecretWord prop  
  const wrapper = shallow(<UnconnectedApp {...props} />)

  //run liofecycle method
  wrapper.instance().componentDidMount(); //this will use the mock not the actual getSecretWord function

  //check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
})
