/* exported capitalizeWords */
// define a function named 'capitalizeWords' with a single parameter 'string'
// create a string to store the new word
// have a boolean to keep trace of empty spaces. space initialize as true to uppercase first letter
// iterate through each char in string and concatenate each char to newString following the below rule
// first char is upperchase and char after is lowercase until a space is found
// everytime space is found the next char is uppercase
// after every uppercase the following chars are lowercase until the next space is found
// return newString

function capitalizeWords(string) {
  // var tempArray = string.split(' ');
  // var newArray = [];
  // var newString = '';
  // for (var i = 0; i < tempArray.length; i++) {
  //   var tempString = '';
  //   tempString += tempArray[i][0].toUpperCase();
  //   for (var j = 1; j < tempArray[i].length; j++) {
  //     tempString += tempArray[i][j].toLowerCase();
  //   }
  //   newArray[i] = tempString;
  // }
  // newString = newArray.join(' ');
  // return newString;
  var newString = '';
  var space = true;
  for (var i = 0; i < string.length; i++) {
    if (space) {
      newString += string[i].toUpperCase();
      space = false;
    } else {
      if (string[i] === ' ') {
        space = true;
      }
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
