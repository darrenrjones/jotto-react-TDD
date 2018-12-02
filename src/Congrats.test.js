import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
  //spreads whatever objects passed as props into key value pairs for ...props
  //example success={true}
}

// describe('<Congrats />', () => {
it('renders without error', () => {
  const wrapper = setup();
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
// });
