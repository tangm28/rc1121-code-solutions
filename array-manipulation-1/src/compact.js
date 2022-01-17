/* exported compact */
function compact(array) {
  var ommit = [false, null, NaN, 0, -0, undefined, ''];
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (ommit.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
