import { correctGuess, CORRECT_GUESS } from './';

describe('correctGUess', () => {

  it('returns an action with type CORRECT_GUESS', () => {
    const action = correctGuess();
    //toBe can not be used for muteable objects like {} toBe is like ===
    //toEqual is a deep equal that will check values within as well
    expect(action).toEqual({ type: CORRECT_GUESS })
  });

});