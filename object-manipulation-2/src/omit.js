/* exported omit */
// create function named omit with 2 parameters; source and key
// create a new object
// iterate through keys of source and check if the key is found in the array keys
// if there are no match add the key and value into newObject
// return newObject

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (keys.includes(key) === false) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
