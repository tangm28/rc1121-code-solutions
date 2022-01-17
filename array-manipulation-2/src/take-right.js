/* exported takeRight */
function takeRight(array, count) {
  var tempArray = [];
  if (array.length > 0) {
    for (var i = array.length - count; i < array.length; i++) {
      tempArray.push(array[i]);
    }
  }
  return tempArray;
}
