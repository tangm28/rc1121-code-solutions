/* exported isVowel */
function isVowel(character) {
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowel.length; i++) {
    if (character.toLowerCase() === vowel[i]) {
      return true;
    }
  }
  return false;
}
