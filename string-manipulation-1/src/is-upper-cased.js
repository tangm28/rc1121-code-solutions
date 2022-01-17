/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase() && word[i].toUpperCase() !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

// define a function named 'isUpperCased' with a single parameter 'word'
// iterate through each char of word to check if char is lower case
// as an edge case we also check if the char is a special character
// return false if a lower case char is found
// return true if loop successfully finishes without finding a lowercase char
