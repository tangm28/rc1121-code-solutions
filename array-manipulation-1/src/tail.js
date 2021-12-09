/* exported tail */
// define a function named 'tail' which takes a single array parameter
// check if the array is empty
// if the array is empty return an empty array
// create a new array
// iterate through the array starting at index of 1 and push each item into the new array
// return the new array
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
