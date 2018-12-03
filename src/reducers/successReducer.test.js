import { CORRECT_GUESS } from '../actions';

import successReducer from './successReducer';

it(' returns default initial state of false when no action is passed', () => {
  const newState = successReducer(undefined, {}); //pass object for actions or action will be undefined 
  expect(newState.success).toBe(false);
});

it('returns state of true if action of type CORRECT__GUESS is passed', () => {
  const newState = successReducer(undefined, { type: CORRECT_GUESS });
  expect(newState.success).toBe(true);
});