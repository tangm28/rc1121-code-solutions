/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var tempArray = [];
  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      tempArray.push(array[i]);
      if (tempArray.length === size || (array.length - i < size && array.length % size !== 0)) {
        newArray.push(tempArray);
        tempArray = [];
      }
    }
  }
  return newArray;
}
