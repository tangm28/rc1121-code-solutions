/* exported drop */
// create a function named drop that takes 2 parameters; array, count
// create a new array to store the nescessary items
// iterate through original array starting at count until the end and push each item into the new array
// return new array

function drop(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
