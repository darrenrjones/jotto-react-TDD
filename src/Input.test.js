import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';

import Input from './Input';

//factory setup function to create shallow wrapper for Input component
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  //dive returns non-DOM react child comp of shallow wrapper, will return Input comp connected to store
  const wrapper = shallow(<Input store={store} />).dive(); 
  // console.log(wrapper.debug());
}

// setup(); //debug to console log call

describe('render', () => {

  describe('word has not been guessed', () => {
    it('renders comp without error', () => {

    })
    it('renders input box', () => {

    })
    it('renders submit button', () => {

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