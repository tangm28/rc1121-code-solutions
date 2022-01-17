/* exported flatten */
// create a function called flatten that takes a parameter array
// create a new array
// if item in array is an array we go into it and push it items into the newArray
// if item is not an array just push the items into newArray
// return newArray
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
