import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';

import Input from './Input';

//factory setup function to create shallow wrapper for Input component
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  //dive returns non-DOM react child comp of shallow wrapper, will return Input comp connected to store
  const wrapper = shallow(<Input store={store} />).dive(); //enzyme recommends dive and redux says use unconnected version...
  // console.log(wrapper.debug());
  return wrapper;
}

// setup(); //debug to console log call

describe('render', () => {

  describe('word has not been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    })
    it('renders comp without error', () => {
      const comp = findByTestAttr(wrapper, 'comp-input');
      expect(comp.length).toBe(1);
    })
    it('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    })
    it('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    })
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    })
    it('renders comp without error', () => {
      const comp = findByTestAttr(wrapper, 'comp-input');
      expect(comp.length).toBe(1);
    })
    it('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    })
    it('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    })
  });

});

describe('redux props', () => {
  it('has `success` from state as a prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success)
  });
  it('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';
  beforeEach(() => {
    //setup mock for 'guessWord'
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock
    }
    const UnconnectedInput = Input.WrappedComponent;
    wrapper = shallow(<UnconnectedInput {...props} />);

    //add value to inputBox
    wrapper.instance().inputBox.current = { value: guessedWord}
    //sim click
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault(){}});
    //simulate doesn't have an event by enzyme default
  })

  it('`guessWord` is called on submit button click', () => {
    const guessWordMockCallCount = guessWordMock.mock.calls.length;
    expect(guessWordMockCallCount).toBe(1);
  });
  it('`guessWord` is called with input value as argument', () => {
    // console.debug(guessWordMock.mock.calls);
    
    const guessWordArg =  guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
});