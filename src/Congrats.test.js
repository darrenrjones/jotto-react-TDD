import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';

import checkPropTypes from 'check-prop-types';

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props}; //if props are passed they can overwrite default
  return shallow(<Congrats {...setupProps} />);
  //spreads whatever objects passed as props into key value pairs for ...props
  //example success={true}
}

  it('renders without error', () => {
    const wrapper = setup({ success: false });
    const comp = findByTestAttr(wrapper, 'comp-congrats');
    expect(comp.length).toBe(1);
  });

  it('renders no text when `success` props is false', () => {
    const wrapper = setup({ success: false });
    const comp = findByTestAttr(wrapper, 'comp-congrats');
    expect(comp.text()).toBe('');
    //text() Note: can only be called on a wrapper of a single node.
  });

  it('renders non-empty congrats message when `sucess` true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
  });

  it('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
  });
