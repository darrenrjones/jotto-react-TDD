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
    it('renders comp without error', () => {

    })
    it('does not render input box', () => {

    })
    it('does not render submit button', () => {

    })
  });

});

describe('update state', () => {

});