/* exported capitalize */
function capitalize(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}

// define a function named 'capitalize' with a single parameter 'word'
// create a string to store the new word
// uppercase the first letter of word and concatanate it to the new word
// iterate through the rest of the word and concatanate each letter into new word
// return the newWord string
