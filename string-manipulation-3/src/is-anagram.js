/* exported isAnagram */
// create a function called isAnagram that takes 2 parameters; firstString and secondString
// first split the space and compare the size of strings
// if the sizes does not match return false. the 2 strings are not anagrams of each other
// create new var tempChar to keep track of char in string
// count the occurance of these char
// iterate through the string and if all char count match up then they are anagram
function isAnagram(firstString, secondString) {
  var newFirst = firstString.split(' ').join('');
  var newSecond = secondString.split(' ').join('');
  var tempChar = '';
  if (newFirst.length !== newSecond.length) {
    return false;
  } else {
    for (var i = 0; i < newFirst.length; i++) {
      tempChar = newFirst[i];
      var firstCharCounter = 0;
      var secondCharCounter = 0;
      for (var j = 0; j < newSecond.length; j++) {
        if (newFirst[j] === tempChar) {
          firstCharCounter++;
        }
        if (newSecond[j] === tempChar) {
          secondCharCounter++;
        }
      }
      if (firstCharCounter !== secondCharCounter) {
        return false;
      }
    }
    return true;
  }
}
