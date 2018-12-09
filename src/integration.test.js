import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  let store;
  const initialState = { secretWord };
  //default guessWords will be empty [] and success will be false
  beforeEach(() => {
    store = storeFactory(initialState);
  })

  describe('no guessed words', () => {
    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      }
      expect(newState).toEqual(expectedState);
    });
    it('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [{
          guessedWord: 'party',
          letterMatchCount: 5
        }]
      }
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1},];

    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    })
    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        success: false,
        secretWord,
        guessedWords : [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3}]
      }
      expect(newState).toEqual(expectedState);
    });
    it('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();

      const expectedState = {
        success:true,
        secretWord,
        guessedWords : [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5}]
      }
      expect(newState).toEqual(expectedState);
    });
  });
});