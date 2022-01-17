/* exported getKeys */
// define a function named 'getKeys' which takes a parameters objects
// create new array keys
// iterate through objects
// push each items of object into keys
// return the array keys
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
