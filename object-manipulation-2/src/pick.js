/* exported pick */
// create function named pick with 2 parameters; source and key
// create a new object
// iterate through keys and check if it is in source
// keys found in source is pushed into newObject if the value of key is not undefined
// return newObject

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in source && source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}
