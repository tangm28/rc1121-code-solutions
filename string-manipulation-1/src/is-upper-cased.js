/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase() && word[i].toUpperCase() !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
