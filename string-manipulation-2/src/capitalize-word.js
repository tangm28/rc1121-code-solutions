/* exported capitalizeWord */
// define a function named 'capitalizeWord' with a single parameter 'word'
// create a string to store the new word
// uppercase the first letter of word and concatanate it to the new word
// iterate through the rest of the word and concatanate each letter into new word
// check if new word is Javascript. if yes change to JavaScript
// return the newWord string

function capitalizeWord(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  if (newWord === 'Javascript') {
    newWord = 'JavaScript';
  }
  return newWord;
}
