//returns numbers of matched letters between guessedWord and the secretWord answer
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split('');
  const guessedLetterSet = new Set(guessedWord.split(''));
  return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
};