/* exported ransomCase */
// define a function named 'ransomCase' with a single parameter 'word'
// create a string to store the new word
// iterate through the index of word
// mod the index by 2. if it is 0, it is even otherwise odd
// concatenate the char at even index as lower case and upper case at odd index
// return newWord

function ransomCase(word) {
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      newWord += word[i].toLowerCase();
    } else {
      newWord += word[i].toUpperCase();
    }

  }
  return newWord;
}
