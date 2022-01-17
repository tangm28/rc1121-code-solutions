function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var minutes = 5;
console.log('Seconds in ' + minutes + ' is: ' + convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

var name = 'Michael Tang';
console.log(greet(name));

function getArea(width, height) {
  return width * height;
}

console.log('The value of getArea is: ', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

var person = {
  firstName: 'Lelouche', lastName: 'Lamperouge'
};

console.log('The value of getFirstName is: ', getFirstName(person));

function getLastElement(array) {
  return array[array.length - 1];
}

var kingOfTheHill = ['propane', 'and', 'propane', 'accessories'];
console.log('The value of getLastElement is: ', getLastElement(kingOfTheHill));
