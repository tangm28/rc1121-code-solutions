/* exported take */
// create a function named take that takes 2 parameters; array, count
// create a new array to store the nescessary items
// iterate through original array until the count and push each item into the new array
// return new array

function take(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
